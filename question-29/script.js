//print object
let person = {
    name: "Alice",
    age: 30,
    isMarried: true,
    address:{
        street : "Vinay Nagar",
        flatNO: 201,
    }
};
console.log(person);
//creating objects using the 'new'keyword
let person2 = new Object();
person2.name = "Bob";
person2.age = 25;
person2.isMarried = false;
person2.address = {}
person2.address.street = "Gandhi Nagar";
person2.address.flatNO = 101;
console.log(person2);

