export function footer(){
    const p = document.getElementById("app");
    const footer = document.createElement("footer");
    footer.classList = "footer";
    const copyright = document.createElement("p");
    copyright.classList = "footer-copyright";
    copyright.textContent = "© 2026 SmartBank — Prototype fictif. Aucune transaction réelle.";

    p.appendChild(footer);
    footer.appendChild(copyright);
}