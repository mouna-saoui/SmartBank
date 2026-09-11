
import {displayDashboard } from "../public/display.js"

function layout(){
    
    const page = window.location.pathname ; 
    
    if(localStorage.getItem("is_log") === "true"){
        switch(page){ 

            case "/":
             displayDashboard();
                break; 
        
            case "/dashboard": 
             displayDashboard();
                break; 
        
            case "/profile":
            displayProfile();
               break; 
        
            case "/offresFlash":
             displayOffresFlash();
                break;
        
            case "/Historique":
             displayHistorique();
                break;
            default:
          display404();
                break; 
        }
    
    }else{
        switch(page){
    
            case "/" : 
             diplayLoginPage(); 
                break;
            case "/login" : 
             diplayLoginPage(); 
                break;
            case "/register": 
             diplayRegisterPage();
                break;
        }
    }
}

layout()