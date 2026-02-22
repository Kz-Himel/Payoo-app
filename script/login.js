// Import Log in Button
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", () => {
    // Get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log("Contact Number:", contactNumber);
    // Get the pin input
    const pinInput = document.getElementById("input-pin");
    const pinNumber = pinInput.value;
    console.log("Pin:", pinNumber);
    // condional statement
    if(contactNumber == "01234567890" && pinNumber == "1234") {
        alert("Login Success!");

        // When login is true go to the home page
        window.location.assign("/home.html");
    }
    else {
        alert("Log in failed!!!")
        return;
    }
});