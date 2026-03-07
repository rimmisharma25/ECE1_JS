//While 
let i=1;
while(i<=5){
    console.log("Manju Sharma");
    i++;
}
//do while
let j=20;
do{
    console.log("Manju Sharma");
    j++;
}while(j<=5);

//for-of loop( to use count the number of characters in a string)
let str = "Pramod Kumar Sharma";
for (let i of str) {
    console.log("i = ",i);
}

//to measure the length of a string
let str1 = "Javascript";
let size = 0;
for(let i of str){
    console.log("i = ",i);
    size++;
}
console.log("string size = ",size);
