# Read the obesity df
ob <- read.csv("/home/zak/school/fa25/school-fa-25/bios/lab/Obesity_10-17yo_2022.csv")

library(ggplot2)

stopifnot(all(c("State","Rate") %in% names(ob)))
stopifnot(is.numeric(ob$Rate))

## (a) Lowest & highest rate + brief note on variability
# Handle potential ties robustly
min_rate <- min(ob$Rate, na.rm = TRUE)
max_rate <- max(ob$Rate, na.rm = TRUE)
lowest_states  <- ob$State[ob$Rate == min_rate]
highest_states <- ob$State[ob$Rate == max_rate]

cat("Lowest rate:", min_rate, "in", paste(lowest_states, collapse = ", "), "\n")
cat("Highest rate:", max_rate, "in", paste(highest_states, collapse = ", "), "\n\n")

cat("Variability factors (brief): socioeconomic differences, food & built environments,\n",
    "school/health policies, healthcare access, cultural/dietary patterns, and demographics.\n\n")

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

cat(sprintf("Median = %.2f; Q1 = %.2f; Q3 = %.2f; IQR = %.2f\n", q[2], q[1], q[3], IQR_val))
cat(sprintf("Skewness (Fisher-Pearson) ≈ %.3f (positive = right-skew)\n", sk))
if (nrow(outlier_rows) == 0) {
  cat("No IQR-rule outliers detected.\n\n")
} else {
  cat("Potential IQR-rule outliers:\n")
  print(outlier_rows)
  cat("\n")
}

## (d) Frequency histogram
hist(ob$Rate,
     breaks = "Sturges",
     main   = "Histogram: Obesity Rate (per 100, ages 10–17) — 2022",
     xlab   = "Rate per 100",
     col    = "lightgray",
     border = "white")

cat("Histogram vs box plot: the histogram shows distribution shape and modality;\n",
    "the box plot summarizes center/spread/outliers more compactly.\n\n")

## (e) Mean of state rates
simple_mean <- mean(ob$Rate, na.rm = TRUE)
cat(sprintf("Simple (unweighted) mean of state rates = %.2f per 100\n", simple_mean))

cat(
  "Is computing the mean this way sensible?\n",
  "- As a summary of the 'average state', the simple mean is OK.\n",
  "- For a national prevalence, it is NOT ideal because states have different population sizes.\n",
  "  A population-weighted mean (weighted by each state's 10–17 population) is more appropriate.\n\n"
)

