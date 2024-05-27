
        // Prompt user for month and year
        let month = parseInt(prompt("Enter the month (1-12):"), 10);
        let year = parseInt(prompt("Enter the year:"), 10);

        // Check if the inputs are valid
        if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < 1) {
            console.log("Invalid input. Please enter a valid month (1-12) and year.");
        } else {
            let days;

            // Determine the number of days in the month
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
                case 2: // February
                    // Check for leap year
                    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                        days = 29;
                    } else {
                        days = 28;
                    }
                    break;
                default:
                    console.log("Invalid month. Please enter a number between 1 and 12.");
                    break;
            }

            console.log(`The number of days in month ${month} of year ${year} is ${days}.`);
        }