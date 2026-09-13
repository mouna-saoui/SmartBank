localStorage.setItem("is_log" , "false")

function register(){

    let user = {}
    
    const form = document.querySelector("#register")
    
    form.addEventListener("submit" ,(event)=>{

        event.preventDefault()

        const name = document.getElementById("name").value
        const lastName = document.getElementById("prenom").value
        const email = document.getElementById("email").value
        const tele = document.getElementById("tele").value
        const passWord = document.getElementById("passWord").value
        const hashPassword = Hash(passWord)
        user = {
            "name" : name ,
            "lastName" : lastName , 
            "email" : email,
            "tele" : tele,
            "passWord" : hashPassword
        }
    
        localStorage.setItem("user" , JSON.stringify(user))
        
    })
    

}    


function login(){
    let is_log = "false"
    const user = localStorage.getItem("user")
    const loginEmail = document.getElementById("loginEmail")
    const loginPassword =document.getElementById("loginPassword")

    if (user[email] === loginEmail && user[passWord] === loginPassword){
        return is_log = "true"
    }
    
    localStorage.setItem("is_log" , is_log)
}

function logout(){
    localStorage.getItem("is_log")

    localStorage.setItem("is_log" , "false")
}

