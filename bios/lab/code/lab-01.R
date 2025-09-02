#----------------------
# Week 01 Lab Session 
# Your name
# 26 August 2025
#----------------------

# In R, code lines that begin with a hash mark are treated as comments.
# Other software languages may use a different symbol to indicate comments.
# Adding comments to your code can be extremely helpful, not only for your
# future self, but also for anyone else reading your code.

#  8. Find the sum of 2 plus 2


# 11. Read in the data 
#----------------------
# Use the following line of code if you are using your H: drive
tips <- read.table("~/Downloads/tips.txt", header = TRUE)
#
#tips2 <- read.table("C:/Users/kdcarter/OneDrive - University of Iowa/BIOS4120/tips2.txt", header = TRUE)
#
# The following code accesses the data from a website
#tips <- read.delim('https://raw.githubusercontent.com/IowaBiostat/data-sets/main/tips/tips.txt')


# 15. Find out what days are in the data set.
table(tips$Day)
# Fri Sat Sun Thu 
#  19  87  76  62 

# To get in order
tips$Day <- factor(tips$Day, levels=c("Thu", "Fri", "Sat", "Sun"))
table(tips$Day)
# Thu Fri Sat Sun 
#  62  19  87  76 

# 16. Are there more smokers or non-smokers?
if (sum(tips$Smoker=="Yes") > sum(tips$Smoker=="No")) {
  print("More smokers than non-smokers")
} else if (sum(tips$Smoker=="yes") < sum(tips$Smoker=="No")) {
  print("More non-smokers than smokers")
} else {
  print("There are the same number of smoker and non smokers")
}

# 17. What was the total take for the restaurant?
sprintf("The total sum for the restaurant was %f", sum(tips$TotBill))

# 18. What was the total value of tips received?
sprintf("The total sum of tipsfor the restaurant was %f", sum(tips$Tip))


# 19. What was the value of the most expensive meal?
max <- max(tips$TotBill)
sprintf("The max bill was %f", max)

# 20. Histogram
#---------------
hist(tips$TotBill,
     main = "Frequency Histogram Total Bill",
     xlab = "Total Bill ($)",
     col  = "violet")


# 21. Box Plot
#--------------
boxplot(tips$TotBill~tips$Size,
        main = "Boxplot of Total Bill by Number of Diners",
        xlab = "Number of Diners",
        ylab = "Total Bill",
        col  = "orange")

boxplot(tips$TotBill,
        main = "Boxplot of Total Bill by Number of Diners",
        xlab = "Number of Diners",
        ylab = "Total Bill",
        col  = "orange")

# 22. Scatter Plot
#------------------
plot(tips$TotBill, tips$Tip, 
     xlab = "Total Bill Amount",
     ylab = "Tip Amount",
     main = "Relationship of Tip to Bill",
     pch = 10,
     ylim=c(0,10))


# 23. One Way Scatter Plot
#--------------------------
stripchart(tips$Tip, 
           method = "stack", 
           dlab = "Tip Amount", 
           frame.plot = TRUE, 
           offset = 0.35,
           pch = "+",
           xlim = c(0,10),
           ylim = c(0,30),
           at = 0.2)


# 24. Bar Plot
#--------------
tips$Day <- factor(tips$Day, levels=c("Thu", "Fri", "Sat", "Sun"))

barplot(table(tips$Day), 
        col = "blue", 
        main = "Number of Bills by Day", 
        xlab = "Day",
        ylab = "Frequency")



