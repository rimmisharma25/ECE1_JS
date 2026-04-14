let correctPassword = "rim2506";
let attempts = 3;
for(let i = 0; i < 3; i++) {
    let password = prompt("Enter your password:");
    if (password === correctPassword) {
        alert("Access granted.");
        break;
    } else {
        let remainingAttempts = attempts - 1;
        if(remainingAttempts > 0) {
        alert("Access denied. You have " + remainingAttempts + " attempts left.");
        } else {
            alert("account is blocked.");
        }
}
}