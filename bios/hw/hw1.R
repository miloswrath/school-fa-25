# Read the obesity df
ob <- read.csv("/home/zak/school/fa25/school-fa-25/bios/lab/Obesity_10-17yo_2022.csv")

library(ggplot2)
library(dplyr)
library(tidyr)
library(scales)

stopifnot(all(c("State","Rate") %in% names(ob)))
stopifnot(is.numeric(ob$Rate))

## (a) Lowest & highest rate + brief note on variability
# Handle potential ties robustly
min_rate <- min(ob$Rate, na.rm = TRUE)
max_rate <- max(ob$Rate, na.rm = TRUE)
lowest_states  <- ob$State[ob$Rate == min_rate]
highest_states <- ob$State[ob$Rate == max_rate]

cat("Lowest rate:", min_rate, "in", paste(lowest_states, collapse = ", "), "")
cat("Highest rate:", max_rate, "in", paste(highest_states, collapse = ", "), "")

cat("Variability factors (brief): socioeconomic differences, food & built environments,",
    "school/health policies, healthcare access, cultural/dietary patterns, and demographics.")

## (b) Box plot of rates
op <- par(mar = c(4.5, 4.5, 3, 1))  # nicer margins
boxplot(ob$Rate,
        horizontal = FALSE,
        main = "Obesity Rate (per 100 children, ages 10–17) — 2022",
        ylab  = "Rate per 100",
        col   = "lightblue")
par(op)

## (c) Symmetry/Skew + IQR outliers
# Sample skewness (no packages):
skewness <- function(x) {
  x <- x[is.finite(x)]
  n <- length(x)
  m <- mean(x)
  s <- sd(x)
  if (n < 3 || s == 0) return(NA_real_)
  m3 <- sum((x - m)^3) / n
  g1 <- m3 / (s^3)        # population-style skewness
  # Unbiased-ish adjustment (Fisher-Pearson) for sample:
  adj <- sqrt(n*(n-1)) / (n-2)
  adj * g1
}
sk <- skewness(ob$Rate)

q <- quantile(ob$Rate, probs = c(0.25, 0.5, 0.75), na.rm = TRUE)
IQR_val <- q[3] - q[1]
lower_bound <- q[1] - 1.5 * IQR_val
upper_bound <- q[3] + 1.5 * IQR_val
outlier_rows <- ob[ob$Rate < lower_bound | ob$Rate > upper_bound, , drop = FALSE]

cat(sprintf("Median = %.2f; Q1 = %.2f; Q3 = %.2f; IQR = %.2f", q[2], q[1], q[3], IQR_val))
cat(sprintf("Skewness (Fisher-Pearson) ≈ %.3f (positive = right-skew)", sk))
if (nrow(outlier_rows) == 0) {
  cat("No IQR-rule outliers detected.")
} else {
  cat("Potential IQR-rule outliers:")
  print(outlier_rows)
  cat("")
}

## (d) Frequency histogram
hist(ob$Rate,
     breaks = "Sturges",
     main   = "Histogram: Obesity Rate (per 100, ages 10–17) — 2022",
     xlab   = "Rate per 100",
     col    = "lightgray",
     border = "white")

cat("Histogram vs box plot: the histogram shows distribution shape and modality;",
    "the box plot summarizes center/spread/outliers more compactly.")

## (e) Mean of state rates
simple_mean <- mean(ob$Rate, na.rm = TRUE)
cat(sprintf("Simple (unweighted) mean of state rates = %.2f per 100", simple_mean))

cat(
  "Is computing the mean this way sensible?",
  "- As a summary of the 'average state', the simple mean is OK.",
  "- For a national prevalence, it is NOT ideal because states have different population sizes.",
  "  A population-weighted mean (weighted by each state's 10–17 population) is more appropriate."
)

cat(
  "Question 8. ",
  "A. No, it is not reasonable. There is a considerable difference it total population between the countries ",
  "   for each age group."
)

df <- data.frame(
  AgeGroup = c("0–14", "15–24", "25–54", "55–64", "65+"),
  Mexico = c(33461.0, 21832.0, 52827.9, 10663.2, 9865.4),
  UnitedStates = c(61408.9, 42937.8, 129458.2, 42782.5, 56051.6)
)

df <- rbind(
  df,
  data.frame(
    AgeGroup = "Total",
    Mexico = 128649.5,
    UnitedStates = 332639.0
  )
)

df_rel <- df
df_rel$MexicoRel <- round(df_rel$Mexico / df_rel$Mexico[nrow(df_rel)], 4)
df_rel$USRel     <- round(df_rel$UnitedStates / df_rel$UnitedStates[nrow(df_rel)], 4)

df_rel

# Data
df <- tibble::tibble(
  AgeGroup = c("0–14", "15–24", "25–54", "55–64", "65+"),
  Mexico = c(33461.0, 21832.0, 52827.9, 10663.2, 9865.4),
  UnitedStates = c(61408.9, 42937.8, 129458.2, 42782.5, 56051.6)
)

# Order age groups
df <- df %>%
  mutate(AgeGroup = factor(AgeGroup, levels = c("0–14","15–24","25–54","55–64","65+")))

# Long format + relative frequencies within each country
df_long <- df %>%
  pivot_longer(cols = c(Mexico, UnitedStates), names_to = "Country", values_to = "Count") %>%
  group_by(Country) %>%
  mutate(RelFreq = Count / sum(Count)) %>%
  ungroup()

# Overlaid frequency polygons (lines across ordered bins)
ggplot(df_long, aes(x = AgeGroup, y = RelFreq, group = Country, color = Country)) +
  geom_line(size = 1.2) +
  geom_point(size = 2) +
  scale_y_continuous(labels = percent_format(accuracy = 0.1), limits = c(0, NA)) +
  labs(
    title = "Age Distribution: Relative Frequencies by Country",
    x = "Age Group",
    y = "Relative Frequency",
    color = "Country"
  ) +
  theme_minimal(base_size = 13) +
  theme(panel.grid.minor = element_blank())

cat("Mexico shows a younger population structure with higher shares under 25,",
    "while the U.S. has relatively more people in older age groups (55+)."
)

olc = read.csv("/home/zak/school/fa25/school-fa-25/bios/lab/OCHL4120.csv")
# (a) Sex – Bar Chart
ggplot(olc, aes(x = sex)) +
  geom_bar(fill = "steelblue") +
  labs(title = "Distribution of Sex",
       x = "Sex",
       y = "Count") +
  theme_minimal()

# (b) AgeAidFitted – Histogram
ggplot(olc, aes(x = age_aid_fitted)) +
  geom_histogram(binwidth = 5, fill = "darkgreen", color = "white") +
  labs(title = "Distribution of Age at Hearing Aid Fitting",
       x = "Age at Hearing Aid Fitting (years)",
       y = "Frequency") +
  theme_minimal()

# (c) IncomeRange – Bar Chart
ggplot(olc, aes(x = income_range)) +
  geom_bar(fill = "orange") +
  labs(title = "Distribution of Income Range",
       x = "Income Range",
       y = "Count") +
  theme_minimal()

# (d) BetterEarPTA – Boxplot
ggplot(olc, aes(y = better_ear_PTA)) +
  geom_boxplot(fill = "purple", alpha = 0.6) +
  labs(title = "Distribution of Better Ear PTA",
       y = "Better Ear PTA (dB HL)") +
  theme_minimal()

# (e) MothersEducation – Bar Chart
ggplot(olc, aes(x = mom_edu)) +
  geom_bar(fill = "darkred") +
  labs(title = "Distribution of Mother’s Education",
       x = "Mother’s Education Level",
       y = "Count") +
  theme_minimal()
