let pin = prompt("Enter your 4-digit PIN:");
let attempts = 3;
while (attempts > 0 ){
    let pin = prompt("Enter your 4-digit PIN:");
    if(userpin === pin){
        alert("PIN is correct. Access granted.");
        break;
    } else {
        attempts--;
        if (attempts > 0) {
            alert("PIN is incorrect. You have " + attempts + " attempts left.");
        }
    }
}
if (attempts === 0) {
    alert("Too many incorrect attempts. Account is blocked.");

}