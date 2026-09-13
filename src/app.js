import {displayDashboard, displayProfile, displayOffresFlash, displayHistorique, display404, diplayLoginPage, diplayRegisterPage} from "../public/display.js"

function layout(){
    const page = window.location.hash;
console.log(page)
    if(localStorage.getItem("is_log") === "true"){
        switch(page){
            case "":
            case "#":
            case "#dashboard":
                displayDashboard();
                break;
            case "#profile":
                displayProfile();
                break;
            case "#offresFlash":
                displayOffresFlash();
                break;
            case "#historique":
                displayHistorique();
                break;
            default:
                display404();
                break;
        }
    } else {
        switch(page){
            case "":
            case "#":
            case "#login":
                diplayLoginPage();
                break;
            case "#register":
                diplayRegisterPage();
                break;
            default:
                diplayLoginPage();
                break;
        }
    }
}


window.addEventListener("hashchange", layout);
layout();
