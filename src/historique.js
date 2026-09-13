export function historique(){    
    const hist = JSON.parse(localStorage.getItem("historique")) || [];

    const section = document.querySelector(".historique");
    if(hist.length === 0){
        const empty = document.createElement("p");
        empty.textContent = "Aucune transaction pour le moment.";
        section.appendChild(empty);
    } else {
        hist.forEach(({ type, montant, date }) => {
            const row = document.createElement("div");
            row.classList = "transaction-row";

            const typeEl = document.createElement("span");
            typeEl.textContent = type;
            typeEl.classList = type === "Entrée" ? "entree" : "retrait";

            const montantEl = document.createElement("span");
            montantEl.textContent = montant + " $";

            const dateEl = document.createElement("span");
            dateEl.textContent = date;

            row.appendChild(typeEl);
            row.appendChild(montantEl);
            row.appendChild(dateEl);
            section.appendChild(row);
        });}
}