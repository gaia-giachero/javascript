const button = document.querySelector('#cambiaTema');

function applicaTema() {
    let tema = localStorage.getItem("tema") || "chiaro";
    document.body.classList.remove("tema-chiaro", "tema-scuro");
    document.body.classList.add(`tema-${tema}`);
}

button.addEventListener('click', () => {
    let temaCorrente = localStorage.getItem("tema") || "chiaro";
    let nuovoTema = temaCorrente === "chiaro" ? "scuro" : "chiaro";
    localStorage.setItem("tema", nuovoTema);
    applicaTema();
});

// Applica il tema al caricamento
applicaTema();