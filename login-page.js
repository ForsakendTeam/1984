const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Chamitha" && password === "1984-1") {
        alert("You have successfully logged in.");
        location.replace('https://forsakendteam.github.io/1984.github.io/hub.html');
    } else if (username === "Samir" && password === "1984-2") {
        alert("You have successfully logged in.");
        location.replace('https://forsakendteam.github.io/1984.github.io/hub.html');
    } else if (username === "Theo" && password === "1984-3") {
        alert("You have successfully logged in.");
        location.replace('https://forsakendteam.github.io/1984.github.io/hub.html');
    } else if (username === "Jack" && password === "1984-4") {
        alert("You have successfully logged in.");
        location.replace('https://forsakendteam.github.io/1984.github.io/hub.html');
    } 
})