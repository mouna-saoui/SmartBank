export function footer(){
    if (document.getElementById("footer")) {
        return;
    }
    const p = document.getElementById("body");

        const footer = document.createElement("footer");
        footer.id = "footer";

        const copyright = document.createElement("p");
        copyright.classList = "footer-copyright";
        copyright.textContent = "© 2026 SmartBank — Prototype fictif. Aucune transaction réelle.";
        
        p.appendChild(footer);
    footer.appendChild(copyright);
}