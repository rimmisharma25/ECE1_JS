let companies = ["Bloomberg","Microsoft","Uber","Google","IBM"];
//Remove the first comapny from the array
companies.shift(0);
console.log(companies); // Output: ["Microsoft","Uber","Google","IBM"]
//remove uber and ola in it's place
companies.splice(1,1,"Ola");
console.log(companies); // Output: ["Microsoft","Ola","Google","IBM"]
//add "Amazon" at the end of the array
companies.push("Amazon");
console.log(companies); // Output: ["Microsoft","Ola","Google","IBM","Amazon"]


