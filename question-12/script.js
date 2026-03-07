
//for loop
for(let count=1; count<=5; count++){
    console.log("Manju Sharma");
}
let student = {
    name: "Rahul Sharma",
    age: 20,
    grade: "A",
    isPass: true,
};
for(let key in student){
    console.log("Key =", key, "Value=", student[key]);
}


//calculate the sum of 1 to 5 numbers
let sum = 0;
for (let i=1; i<=5; i++){
    sum = sum + i;
}
console.log("The sum of 1 to 5 is =", sum);
console.log("Loop has ended");