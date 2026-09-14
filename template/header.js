export function navBar(){
    if (document.getElementById("header")) {
        return;
    }
    const body = document.getElementById("body");

    const app = document.getElementById("app");


    const navbar = document.createElement("nav");
    navbar.id = "header";

    body.insertBefore(navbar, app);

    const logo = document.createElement("div");
    logo.classList = "navbar-logo";
    logo.textContent = "SmartBank";

    const nav = document.createElement("div");
    nav.classList = "navbar-links";

    const links = [
        { label: "Dashboard", hash: "#dashboard" },
        { label: "Offres flash", hash: "#offresFlash" },
        { label: "Historique", hash: "#historique" }
    ];
    
    links.forEach(({ label, hash }) => {
        const a = document.createElement("a");
        a.href = hash;
        a.textContent = label;
        nav.appendChild(a);
    });

    const actions = document.createElement("div");
    actions.classList = "navbar-actions";

    const profileIcon = document.createElement("a");
    profileIcon.href = "#profile";
    profileIcon.innerHTML = '<i class="fa-solid fa-circle-user"></i>';
    
    const logoutIcon = document.createElement("a");
    logoutIcon.href = "#";
    logoutIcon.innerHTML = '<i class="fa-solid fa-arrow-right-from-bracket"></i>';
    logoutIcon.addEventListener("click", () => {
        localStorage.setItem("is_log", "false");
        window.location.hash = "#login";
    });
    
    actions.appendChild(profileIcon);
    actions.appendChild(logoutIcon);
    navbar.appendChild(logo);
    navbar.appendChild(nav);
    navbar.appendChild(actions);
}