/*Leap Year Checker

Write a program that takes a year as input and checks if it's a leap year. Leap years are divisible by 4 but not by 100 unless they are also divisible by 400.
Number Sign Checker */
const year=prompt("Enter the year");
if (year % 4 == 0) {
    console.log("LEAP YEAR");
}else if(year %100==0){
    console.log("NORMAL YEAR");
}else if(year % 400==0){
    console.log("LEAP YEAR");
}else{
    console.log("NORMAL YEAR");
}