function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])]; // Set se duplicates remove hote hain
}
console.log(mergeArrays([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]