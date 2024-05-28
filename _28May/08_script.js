// Age Group Classifier

// Write a program that takes a person's age as input and categorizes them into one of the following age groups: infant, child, teenager, adult, senior.

const age= Number(prompt("Enter the age of user"));
function ageGroup(age) {
    if(age<=3){
        console.log("infant");
    }else if(age<=12){
        console.log("child");
    }
    else if(age<=19){
        console.log("Teenage");
    }
    else if(age<=60){
        console.log("Adult");
    }else{
        console.log("Senior");
    }    
}

ageGroup(age);
