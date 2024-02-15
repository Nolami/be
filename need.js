document.addEventListener("DOMContentLoaded", loggedIn)

function loggedIn()
 {
    let logged = "yes"
    if (logged === "yes"){
        document.getElementById("text ").textContent += localStorage.getItem("name")
    }
 }
 function login() {
    localStorage.setItem("name", document.getElementById("name". value))
 }