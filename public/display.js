import { navBar } from "../template/header.js";
import { footer } from "../template/footer.js";
import { register, login } from "../src/Auth.js";
import { historique } from "../src/historique.js";

export function diplayLoginPage(){
    const page = document.getElementById("app");
    page.innerHTML = "";

    const section = document.createElement("section");
    section.classList = "login";

    const title = document.createElement("h2");
    title.textContent = "Login";

    const form = document.createElement("form");
    form.id = "loginForm";

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "loginEmail";
    emailInput.placeholder = "Email";
    emailInput.required = true;

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "loginPassword";
    passwordInput.placeholder = "Mot de passe";
    passwordInput.required = true;

    const btn = document.createElement("button");
    btn.type = "submit";
    btn.textContent = "Se connecter";

    const p = document.createElement("p");
    const link = document.createElement("a");
    link.href = "#register";
    link.textContent = "S'inscrire";
    p.textContent = "Pas de compte ? ";
    p.appendChild(link);

    form.appendChild(emailInput);
    form.appendChild(passwordInput);
    form.appendChild(btn);
    form.appendChild(p);
    section.appendChild(title);
    section.appendChild(form);
    page.appendChild(section);

    login();
}

export function diplayRegisterPage(){
    const page = document.getElementById("app");
    page.innerHTML = "";

    const section = document.createElement("section");
    section.classList = "register";

    const title = document.createElement("h2");
    title.textContent = "Inscription";

    const form = document.createElement("form");
    form.id = "registerForm";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.placeholder = "Nom";
    nameInput.required = true;

    const prenomInput = document.createElement("input");
    prenomInput.type = "text";
    prenomInput.id = "prenom";
    prenomInput.placeholder = "Prénom";
    prenomInput.required = true;

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.placeholder = "Email";
    emailInput.required = true;

    const teleInput = document.createElement("input");
    teleInput.type = "tel";
    teleInput.id = "tele";
    teleInput.placeholder = "Téléphone";
    teleInput.required = true;

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "passWord";
    passwordInput.placeholder = "Mot de passe";
    passwordInput.required = true;

    const btn = document.createElement("button");
    btn.type = "submit";
    btn.textContent = "S'inscrire";

    const p = document.createElement("p");
    const link = document.createElement("a");
    link.href = "#login";
    link.textContent = "Se connecter";
    p.textContent = "Déjà un compte ? ";
    p.appendChild(link);

    form.appendChild(nameInput);
    form.appendChild(prenomInput);
    form.appendChild(emailInput);
    form.appendChild(teleInput);
    form.appendChild(passwordInput);
    form.appendChild(btn);
    form.appendChild(p);
    section.appendChild(title);
    section.appendChild(form);
    page.appendChild(section);

    register();
}

export function displayDashboard(){
    const page = document.getElementById("app");
    page.innerHTML = "";
    navBar();

    const userData = JSON.parse(localStorage.getItem("user")) || {};
    let balance = localStorage.getItem("balance");

    const section = document.createElement("section");
    section.classList = "dashboard";

    // --- Balance ---
    const card = document.createElement("div");
    card.classList = "balance-card";

    const h3 = document.createElement("h3");
    h3.textContent = "Solde Disponible";

    const solde = document.createElement("p");
    solde.id = "solde";
    solde.textContent = balance + "$";

    card.appendChild(h3);
    card.appendChild(solde);

    // --- Entrée ---
    const entreeSection = document.createElement("div");
    entreeSection.classList = "operation";

    const entreeTitle = document.createElement("h4");
    entreeTitle.textContent = "Entrée";

    const entreeInput = document.createElement("input");
    entreeInput.type = "number";
    entreeInput.id = "entreeInput";
    entreeInput.placeholder = "Montant";
    entreeInput.min = "0";

    const btnEntree = document.createElement("button");
    btnEntree.textContent = "Ajouter";
    btnEntree.addEventListener("click", () => {
        const montant = parseFloat(entreeInput.value);

        if(!montant || montant <= 0) return;
        balance = parseFloat(balance) + montant;
        localStorage.setItem("balance", balance);
        solde.textContent = balance + " $";


        const hist = JSON.parse(localStorage.getItem("historique")) || [];
        hist.push({ type: "Entrée", montant, date: new Date().toLocaleString() });
        localStorage.setItem("historique", JSON.stringify(hist));
        entreeInput.value = "";
    });

    entreeSection.appendChild(entreeTitle);
    entreeSection.appendChild(entreeInput);
    entreeSection.appendChild(btnEntree);

    // --- Retrait ---
    const retraitSection = document.createElement("div");
    retraitSection.classList = "operation";

    const retraitTitle = document.createElement("h4");
    retraitTitle.textContent = "Retrait";

    const retraitInput = document.createElement("input");
    retraitInput.type = "number";
    retraitInput.id = "retraitInput";
    retraitInput.placeholder = "Montant";
    retraitInput.min = "0";

    const btnRetrait = document.createElement("button");
    btnRetrait.textContent = "Retirer";
    btnRetrait.addEventListener("click", () => {
        const montant = parseFloat(retraitInput.value);
        if(!montant || montant <= 0) return;
        balance = parseFloat(balance) - montant;
        localStorage.setItem("balance", balance);
        solde.textContent = balance + " $";
        const hist = JSON.parse(localStorage.getItem("historique")) || [];
        hist.push({ type: "Retrait", montant, date: new Date().toLocaleString() });
        localStorage.setItem("historique", JSON.stringify(hist));
        retraitInput.value = "";
    });

    retraitSection.appendChild(retraitTitle);
    retraitSection.appendChild(retraitInput);
    retraitSection.appendChild(btnRetrait);

    section.appendChild(card);
    section.appendChild(entreeSection);
    section.appendChild(retraitSection);
    page.appendChild(section);

    footer();

}

export function displayProfile(){
    
    const page = document.getElementById("app");
    page.innerHTML = "";
    navBar();

    const section = document.createElement("section");
    section.classList = "profile";

    const title = document.createElement("h2");
    title.textContent = "Mon Profil";

    section.appendChild(title);
    page.appendChild(section);

    footer();

}

export function displayOffresFlash(){
    const page = document.getElementById("app");
    page.innerHTML = "";
    navBar();

    const offres = [
        { name: "Carte Premium", category: "Carte", description: "Carte bancaire sans frais à l'étranger", discount: 30 },
        { name: "Prêt Immobilier", category: "Crédit", description: "Taux réduit pour votre premier achat", discount: 15 },
        { name: "Assurance Auto", category: "Assurance", description: "Couverture complète tous risques", discount: 25 },
        { name: "Compte Épargne", category: "Épargne", description: "Taux boosté pendant 3 mois", discount: 50 },
        { name: "Virement Express", category: "Transfert", description: "Virements instantanés sans commission", discount: 100 }
    ];

    const section = document.createElement("section");
    section.classList = "offres-flash";

    const title = document.createElement("h2");
    title.textContent = "Offres Flash";
    section.appendChild(title);

    // popUp de confirmation
    const popUp = document.createElement("div");
    popUp.classList = "popUp-overlay hidden";
    const popUpBox = document.createElement("div");
    popUpBox.classList = "popUp-box";

    const popUpTitle = document.createElement("h3");
    const popUpDesc = document.createElement("p");
    const popUpDiscount = document.createElement("span");
    popUpDiscount.classList = "popUp-discount";

    const popUpActions = document.createElement("div");
    popUpActions.classList = "popUp-actions";

    const btnConfirm = document.createElement("button");
    btnConfirm.textContent = "Confirmer";
    btnConfirm.classList = "btn-confirm";

    const btnCancel = document.createElement("button");
    btnCancel.textContent = "Annuler";
    btnCancel.classList = "btn-cancel";
    btnCancel.addEventListener("click", () => popUp.classList.add("hidden"));

    popUpActions.appendChild(btnConfirm);
    popUpActions.appendChild(btnCancel);
    popUpBox.appendChild(popUpTitle);
    popUpBox.appendChild(popUpDesc);
    popUpBox.appendChild(popUpDiscount);
    popUpBox.appendChild(popUpActions);
    popUp.appendChild(popUpBox);
    page.appendChild(popUp);

    offres.forEach(({ name, category, description, discount }) => {
        const card = document.createElement("div");
        card.classList = "offer-card";

        const badge = document.createElement("span");
        badge.classList = "offer-badge";
        badge.textContent = "-" + discount + "%";

        const cat = document.createElement("span");
        cat.classList = "offer-category";
        cat.textContent = category;

        const offerName = document.createElement("h3");
        offerName.textContent = name;

        const desc = document.createElement("p");
        desc.textContent = description;

        const btnSouscrire = document.createElement("button");
        btnSouscrire.textContent = "Souscrire";
        btnSouscrire.classList = "btn-souscrire";
        btnSouscrire.addEventListener("click", () => {
            popUpTitle.textContent = name;
            popUpDesc.textContent = description;
            popUpDiscount.textContent = "-" + discount + "% de réduction";
            popUp.classList.remove("hidden");

            btnConfirm.onclick = () => {
                const hist = JSON.parse(localStorage.getItem("historique")) || [];
                hist.push({
                    type: "Offre",
                    montant: name + " (-" + discount + "%)",
                    date: new Date().toLocaleString()
                });
                localStorage.setItem("historique", JSON.stringify(hist));
                popUp.classList.add("hidden");

                const confirm = document.createElement("div");
                confirm.classList = "offer-confirmed";
                confirm.textContent = "✓ Offre souscrite !";
                
                card.appendChild(confirm);
                btnSouscrire.disabled = true;
                btnSouscrire.textContent = "Souscrit";
            };
        });

        card.appendChild(badge);
        card.appendChild(cat);
        card.appendChild(offerName);
        card.appendChild(desc);
        card.appendChild(btnSouscrire);
        section.appendChild(card);
    });

    page.appendChild(section);
    footer();
}

export function displayHistorique(){
    const page = document.getElementById("app");
    page.innerHTML = "";

    navBar();

    const section = document.createElement("section");
    section.classList = "historique";

    const title = document.createElement("h2");
    title.textContent = "Historique des transactions";

    
    section.appendChild(title);
    page.appendChild(section);
    footer();
    
    historique();
}

export function display404(){
    const page = document.getElementById("app");
    page.innerHTML = "";
    navBar();

    const section = document.createElement("section");
    section.classList = "notfound";

    const title = document.createElement("h2");
    title.textContent = "404 - Page introuvable";

    section.appendChild(title);
    page.appendChild(section);

    footer();
}
