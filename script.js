const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const switchButton = document.getElementById("switchButton");
const bottomMessage = document.getElementById("bottomMessage");


function showLogin() {

    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");

    loginTab.classList.add("active");
    signupTab.classList.remove("active");

    bottomMessage.textContent =
        "Don't have an account?";

    switchButton.textContent =
        "Sign Up";
}


function showSignup() {

    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");

    loginTab.classList.remove("active");
    signupTab.classList.add("active");

    bottomMessage.textContent =
        "Already have an account?";

    switchButton.textContent =
        "Login";
}


loginTab.addEventListener("click", showLogin);

signupTab.addEventListener("click", showSignup);

switchButton.addEventListener("click", () => {

    if (signupForm.classList.contains("hidden")) {
        showSignup();
    } else {
        showLogin();
    }

});


loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Login successful!");

});


signupForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const password =
        signupForm.querySelectorAll("input")[2].value;

    const confirmPassword =
        signupForm.querySelectorAll("input")[3].value;


    if (password !== confirmPassword) {

        alert("Passwords do not match!");

        return;
    }


    alert("Account created successfully!");

});