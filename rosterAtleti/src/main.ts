import type { Filtro } from "./types";
import { aggiungiAtleta, impostaFiltro } from "./state";
import { renderAtleti } from "./render";

const nomeInput = document.querySelector<HTMLInputElement>("#atleta-nome")!;
const disciplinaInput = document.querySelector<HTMLInputElement>("#atleta-disciplina")!;
const fotoInput = document.querySelector<HTMLInputElement>("#atleta-foto")!;
const addBtn = document.querySelector<HTMLButtonElement>("#add-btn")!;

// main.ts NON deve contenere logica sui dati:
// solo eventi e chiamate alle funzioni degli altri file.

// TODO: al click su "Aggiungi":
function aggiungi(){
    //   1. leggi i tre campi (con trim)
    const testo = nomeInput.value.trim();
    const disciplina = disciplinaInput.value.trim();
    const foto = fotoInput.value.trim();

    //   2. se nome o foto sono vuoti, esci
    if(testo === "") return;

    //   3. chiama aggiungiAtleta(...)
    aggiungiAtleta(testo, disciplina, foto);
    
    //   4. svuota i campi
    disciplinaInput.value = "";
    
    //   5. chiama renderAtleti()
    renderAtleti();

}

function collegaFiltro(selettore: string, filtro: Filtro) {
    // TODO: collega i tre pulsanti filtro (#filter-all, #filter-squadra, #filter-riserve)
    document.querySelector(selettore)!.addEventListener('click', () => {
        // a impostaFiltro(...) seguito da renderAtleti().
        // Suggerimento: una funzione helper evita di ripetere lo stesso codice tre volte.
        impostaFiltro(filtro);
        renderAtleti();
    })
}

// Primo render all'apertura della pagina
renderAtleti();
