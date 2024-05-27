// Month Days Counter

// Write a program that takes a month (as a number between 1 and 12) and a year as input and prints out the number of days in that month. Take leap years into account.

//  June sept nov ap.
const month = Number(prompt("enter the month"));
// const year = Number(prompt("Enter the year"));

switch (month) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
        days = 31;
        break;
    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
        days = 30;
        break;
}
