//Functions
function myFunction(){
    alert("Hello World");

}
//javascript function
function sayHello(name, age){
    console.log(name + " is " + age + " years old.");
}
//multiple
let res = mul(12,30);
function mul(a,b){
    return a*b;
}
console.log("The result of multiplication is: ", res);
//arrow function is anonymous function(jiska koi naam na diya ho)
let add2 = (x,y) => {
    console.log("The sum is: ", x+y);
}
add2(10,20);
let add3 = (x,y) => x*y;
console.log("The result of multiplication is: ", add3(7,6));


