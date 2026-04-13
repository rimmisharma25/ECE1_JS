function isPalindrome(str) { //string reverse ke baad same h ya nhi
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false