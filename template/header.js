export function navBar(){

    const nav = document.createElement('nav')
    nav.classList = "header"


    const p = document.getElementById("header");
    
    const html = p.innerHTML = `
        <div>SmartBank</div>
        <div>
        <p>Dashboard</p>
        <p>Offres flash</p>
        <p>Historique</p>
        </div>
        <div>
        <i class="fa-solid fa-circle-user"></i>
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </div>
    
    `

    p.appendChild(html)
}