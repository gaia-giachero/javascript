import type { Filtro } from "../types";
import { aggiungiAtleta, impostaFiltro } from "./state";
import { renderAtleti } from "./render";
import { leggiComeDataURL } from "./file";

const nomeInput = document.querySelector<HTMLInputElement>("#atleta-nome")!;
const disciplinaInput = document.querySelector<HTMLInputElement>("#atleta-disciplina")!;
const fotoInput = document.querySelector<HTMLInputElement>("#atleta-foto")!;
const fileInput = document.querySelector<HTMLInputElement>("#atleta-file")!;
const addBtn = document.querySelector<HTMLButtonElement>("#add-btn")!;

// main.ts NON deve contenere logica sui dati:
// solo eventi e chiamate alle funzioni degli altri file.

addBtn.addEventListener("click", async () => {
  const nome = nomeInput.value.trim();
  const disciplina = disciplinaInput.value.trim();
  if (nome === "") return;

  // Bonus "foto da file": se e' stato scelto un file ha la precedenza sull'URL.
  const file = fileInput.files?.[0];
  let foto: string;
  try {
    foto = file ? await leggiComeDataURL(file) : fotoInput.value.trim();
  } catch {
    alert("Non è stato possibile leggere il file.");
    return;
  }
  if (foto === "") return;

  if (!aggiungiAtleta(nome, disciplina, foto)) {
    // Succede quando il localStorage e' pieno (limite di circa 5 MB).
    alert("Spazio esaurito: prova con una foto più piccola.");
    return;
  }

  nomeInput.value = "";
  disciplinaInput.value = "";
  fotoInput.value = "";
  fileInput.value = "";

  renderAtleti();
});

// Helper: collega un pulsante filtro, senza ripetere lo stesso codice tre volte.
function collegaFiltro(selettore: string, filtro: Filtro): void {
  const btn = document.querySelector<HTMLButtonElement>(selettore)!;
  btn.addEventListener("click", () => {
    impostaFiltro(filtro);
    renderAtleti();
  });
}

collegaFiltro("#filter-all", "tutti");
collegaFiltro("#filter-squadra", "inSquadra");
collegaFiltro("#filter-riserve", "riserve");

// Primo render all'apertura della pagina
renderAtleti();
