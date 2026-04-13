function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Base case: factorial of 0 or 1 is 1
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i; // Multiply result by i for each number from 2 to n
    }
    return result;
}