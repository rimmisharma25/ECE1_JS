const sym1 = Symbol("sym1");
console.log(sym1);
const sym2 = Symbol("sym1");
console.log(sym2);
if(sym1 === sym2) {
    console.log("Symbols are equal");
} else {
    console.log("Symbols are not equal"); // false, because each symbol is unique
}