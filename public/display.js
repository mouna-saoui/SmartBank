import {header} from "..";
import {footer} from "../template/footer";

function displayBalance(){
        
    const app = document.getElementById("app");
    
    const dashboard = document.createElement('section')
    
    dashboard.classList("dashboard");
    
    const balanceCard = dashboard.innerHTML = `
        
    `
    app.appendChild(dashboard)
}

export function displayDashboard(){
    header.navBar();
    displayBalance();
    footer.footer();
}

export function displayProfile(){

    header.navBar();
    displayBalance();
    footer.footer();
    
}

export function displayOffresFlash(){
        header.navBar();
        
        const app = document.getElementById("app");
        
        const OffresFlash = document.createElement('section')
        OffresFlash.classList("dashboard");
        
        OffresFlash.innerHTML = `
                
                    `
                    
    app.appendChild(OffresFlash)
    footer.footer();
}

export function display404(){
    header.navBar();
    const app = document.getElementById("app");
        
        const erreur = document.createElement('section')
        erreur.classList("notfound");
        
        erreur.innerHTML = `

        `
        app.appendChild(erreur)
    footer.footer();
}