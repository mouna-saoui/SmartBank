export function footer(){

    
    const p = document.getElementById("footer");
    
    const html = p.innerHTML = `
    <p class="footer-copyright">
        © 2026 SmartBank — Prototype fictif. Aucune transaction réelle.
    </p>
    `

    p.appendChild(html)
}