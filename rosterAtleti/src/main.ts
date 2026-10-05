import type { Filtro } from "./types";
import { aggiungiAtleta, impostaFiltro } from "./state";
import { renderAtleti } from "./render";

const nomeInput = document.querySelector<HTMLInputElement>("#atleta-nome")!;
const disciplinaInput =
  document.querySelector<HTMLInputElement>("#atleta-disciplina")!;
const fotoInput = document.querySelector<HTMLInputElement>("#atleta-foto")!;
const addBtn = document.querySelector<HTMLButtonElement>("#add-btn")!;

let testoErrore = document.querySelector<HTMLElement>(".testoErrore")!;

// main.ts NON deve contenere logica sui dati:
// solo eventi e chiamate alle funzioni degli altri file.

// TODO: al click su "Aggiungi":
function aggiungi() {
  //   1. leggi i tre campi (con trim)
  const testo = nomeInput.value.trim();
  const disciplina = disciplinaInput.value.trim();
  const foto = fotoInput.value.trim();

  let messaggio = "";

  //   2. se nome o foto sono vuoti, esci

  if (testo === "" && foto === "") {
    messaggio += "Manca sia il nome che la foto dell'atleta";
  } else if (testo === "") {
    messaggio += "Manca il nome dell'atleta";
  } else if (foto === "") {
    messaggio += "Manca la foto dell'atleta";
  }

  if (messaggio !== "") {
    testoErrore.innerHTML = messaggio;
    return;
  }

  //   3. chiama aggiungiAtleta(...)
  aggiungiAtleta(testo, disciplina, foto);

  //   4. svuota i campi
  nomeInput.value = "";
  disciplinaInput.value = "";
  fotoInput.value = "";
  testoErrore.innerHTML = "";

  //   5. chiama renderAtleti()
  renderAtleti();
}

function collegaFiltro(selettore: string, filtro: Filtro) {
  // TODO: collega i tre pulsanti filtro (#filter-all, #filter-squadra, #filter-riserve)
  document.querySelector(selettore)!.addEventListener("click", () => {
    // a impostaFiltro(...) seguito da renderAtleti().
    // Suggerimento: una funzione helper evita di ripetere lo stesso codice tre volte.
    impostaFiltro(filtro);
    renderAtleti();
  });
}

addBtn.addEventListener("click", aggiungi);
nomeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") aggiungi();
});

// const filtri: [string, Filtro][] = [
//   ["#filter-all", "tutti"],
//   ["#filter-squadra", "inSquadra"],
//   ["#filter-riserve", "riserve"],
// ];

// crea per ogni pulsante che si ha un evento listener click, per ognuno passa impostaFiltro
// for (const [selettore, filtro] of filtri) {
//   document
//     .querySelector<HTMLButtonElement>(selettore)!
//     .addEventListener("click", () => {
//       impostaFiltro(filtro);
//       renderAtleti();
//     });
// }

// più semplice
document.querySelector<HTMLButtonElement>("#filter-all")!.addEventListener("click", () => {
    impostaFiltro("tutti");
    renderAtleti();
});

document.querySelector<HTMLButtonElement>("#filter-squadra")!.addEventListener("click", () => {
    impostaFiltro("inSquadra");
    renderAtleti();
});

document.querySelector<HTMLButtonElement>("#filter-riserve")!.addEventListener("click", () => {
    impostaFiltro("riserve");
    renderAtleti();
});

// collegaFiltro("#filter-all", "tutti");
// collegaFiltro("#filter-active", "inSquadra");
// collegaFiltro("#filter-done", "riserve");

// Primo render all'apertura della pagina
renderAtleti();
