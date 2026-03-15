let marks =[90, 80, 70, 60, 50];
console.log(marks);
console.log(marks.length);
//using of for loop
let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
for(let i=0; i< fruits.length; i++){
    console.log(fruits[i]);
}
//for of loop
for(let fruit of fruits){
    console.log(fruit);
}
//other example
let cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
for(let city of cities){
    console.log(city.toUpperCase());
}