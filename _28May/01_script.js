// Grade Assigner

// Write a program that takes a student's score as input and assigns a grade based on the following criteria:
// Score >= 90: Grade A
// Score >= 80: Grade B
// Score >= 70: Grade C
// Score >= 60: Grade D
// Score < 60: Grade F

const score=prompt("Enter the Student's Score");

function gradeAssigner(score) {
    
if (score >=90) {
    console.log("Grade A");
    alert("Grade A");
} else if (score >=80) {
    console.log("Grade B");
    alert("Grade B");

}
 else if (score >=70) {
    console.log("Grade C");
    alert("Grade C");

}
else if (score >=60) {
    console.log("Grade D");
    alert("Grade D");

}
else{
    console.log("Grade F");
    alert("Grade F");

}
}

gradeAssigner(score);