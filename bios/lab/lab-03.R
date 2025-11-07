# Lab-03.R
tests <- c(80.6, 69.3, 76.6, 81.7, 80.4, 68.0, 71.6,
  63.1, 69.0, 80.1, 88.1, 78.3, 93.7, 81.2, 90.7)

total = sum(tests)

n <- length(tests)

avg = total/n

tests_2 <- sort(tests, decreasing=TRUE)

third_highest <- tests_2[3]

highest <- max(tests)