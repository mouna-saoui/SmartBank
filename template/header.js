export function navBar(){
    const p = document.getElementById("app");
    p.innerHTML = "";
    const navBar = document.createElement("nav");
    navBar.classList = "navbar";
    
    const logo = document.createElement("div");
    logo.textContent = "SmartBank";

    const nav = document.createElement("div");

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
    p.appendChild(navBar);
    navBar.appendChild(logo);
    navBar.appendChild(nav);
    navBar.appendChild(actions);
}