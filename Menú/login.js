var usernames = document.getElementById("username");
var passwords = document.getElementById("password");

function login() {
    var username = usernames.value;
    var password = passwords.value;

    if (username === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }
    else if (username == "admin" && password == "admin") {
        window.location.href = "modificador.html";
    }
}