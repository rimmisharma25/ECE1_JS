//find the average marks of a student
let marks = [85,97,44,37,76,60];
let sum = 0;
for(let value of marks){
    sum += value;
}
let average = sum / marks.length;
console.log(`The average marks of the student is: ${average}`);
// pracrice question 2
let items = [250, 645, 300, 900, 50];
for(let i=0; i< items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);
