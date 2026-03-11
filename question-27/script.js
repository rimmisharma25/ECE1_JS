//condition statement
//if statement,if....else statement,if...else if...else statement, Switch case
//if statement
let age = 20;
if(age >= 18){
    document.write("<b>You are eligible to vote</b>");
}
//if...else statement
let a = 20;
if(a>= 18){
    console.log("you are adult");
}else{
    console.log("You are minor");
}
//switch case
let grade = "B";
console.log("Entering switch case");
switch(grade){
     case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Below Average");
        break;
    case "F":
        console.log("Fail");
        break;
   
    default:
        console.log("Invalid grade");
         
}
