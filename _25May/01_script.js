/*Write a program that takes a student's score as input and assigns a grade based on the following criteria:
Score >= 90: Grade A
Score >= 80: Grade B
Score >= 70: Grade C
Score >= 60: Grade D
Score < 60: Grade F
 */

const score=prompt("Enter the Student's Score");
if (score >=90) {
    console.log("Grade A");
    // prompt("The Grade  is A");
} else if (score >=80) {
    console.log("Grade B");
    // prompt("The Grade  is B");
}
 else if (score >=70) {
    console.log("Grade C");
    // prompt("The Grade  is C");
}
else if (score >=60) {
    console.log("Grade D");
    // prompt("The Grade  is D");
}
else{
    console.log("Grade F");
    // prompt("The Grade  is F");
}
