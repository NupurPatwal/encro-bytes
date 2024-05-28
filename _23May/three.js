const user_age = prompt("Enter the age of user");
if(user_age<=13){
    alert("watch KIDS movies ")
}
else if(user_age>13 && user_age<=18){
    alert("watch TEEN movies");
}
else if(user_age> 18){
    alert("watch ADULT movies");
}