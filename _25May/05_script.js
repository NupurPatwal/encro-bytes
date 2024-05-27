/*Password Validator

Write a program that checks if a given password meets the following criteria:
At least 8 characters long
Contains at least one uppercase letter, one lowercase letter, and one digit */
const password = prompt("Enter Password type?");

// Check for minimum length
if (password.length < 8) {
    alert(false)
    console.log("Password type INCORRECT");
}

// Check for uppercase letter
else if (!/[A-Z]/.test(password)) {
    alert(false)
    console.log("Password type INCORRECT");
}

// Check for lowercase letter
else if (!/[a-z]/.test(password)) {
    alert(false)
    console.log("Password type INCORRECT");
}

// Check for digit
else if (!/[0-9]/.test(password)) {
    alert(false)
    console.log("Password type INCORRECT");
}

// If all checks pass, the password is valid
else {
    alert("true")
    console.log("Password type CORRECT");
}
