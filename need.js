document.addEventListener("DOMContentLoaded", loggedIn)

function loggedIn()
 {
    if (localStorage.getItem("logged") === "true"){
        document.getElementById("text ").textContent += localStorage.getItem("name")
        document.getElementById("name").style.display = "none"
    }
 }
 function login() {
    localStorage.setItem("name", document.getElementById("name". value))
    localStorage.setItem("logged", "true")
 }