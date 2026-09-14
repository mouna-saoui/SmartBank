function hashPassword(passWord){
    return btoa(passWord)
}

function unhashPassword(hash){
    return atob(hash)
}

export function register(){
    const form = document.querySelector("#registerForm")
    if(!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const user = {
            name: document.getElementById("name").value,
            lastName: document.getElementById("prenom").value,
            email: document.getElementById("email").value,
            tele: document.getElementById("tele").value,
            passWord: hashPassword(document.getElementById("passWord").value)
        }

        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("is_log", "false")
        window.location.hash = "#login"
    })
}

export function login(){
    const form = document.querySelector("#loginForm")
    if(!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const user = JSON.parse(localStorage.getItem("user"))
        const email = document.getElementById("loginEmail").value
        const passWord = document.getElementById("loginPassword").value

        if(user && user.email === email && unhashPassword(user.passWord) === passWord){ 
            localStorage.setItem("is_log", "true")
            window.location.hash = "#dashboard"
        } else {
            alert("Email ou mot de passe incorrect")
        }
    })
}

export function logout(){
    localStorage.setItem("is_log", "false")
    localStorage.removeItem("user")
    localStorage.removeItem("balance")
    window.location.hash = "#login"
}
