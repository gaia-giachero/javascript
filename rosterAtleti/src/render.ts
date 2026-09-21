import type { Atleta } from "./types";
import { eliminaAtleta, getAtletiVisibili, impostaInSquadra } from "./state";

const container = document.querySelector<HTMLDivElement>("#atleti-list")!;

function creaCard(atleta: Atleta): HTMLElement {
  // TODO: crea un <div class="card"> che contiene:
  //   - <img> con src = atleta.foto e alt = atleta.nome
  //   - <h3> con il nome
  //   - <p> con la disciplina
  //   - una checkbox "In squadra" (al change -> impostaInSquadra + renderAtleti)
  //   - un pulsante "Elimina" (al click -> eliminaAtleta + renderAtleti)
  // Se l'atleta e' in squadra, aggiungi la classe "in-squadra" alla card.
  
  const card = document.createElement("div");
  card.className = "card";

  const imgAtleta = document.createElement("img");
  imgAtleta.className = "img-atleta";
  imgAtleta.src = atleta.foto;
  imgAtleta.alt = atleta.nome;

  const nomeAtleta = document.createElement("h3");
  nomeAtleta.textContent = atleta.nome;

  const disciplinaAtleta = document.createElement("p");
  disciplinaAtleta.textContent = atleta.disciplina;

  const atletaSquadra = document.createElement("input");
  atletaSquadra.type = 'checkbox';
  atletaSquadra.checked = atleta.inSquadra;
  atletaSquadra.addEventListener('change', () => {
    impostaInSquadra(atleta.id, atletaSquadra.checked);
    renderAtleti();
  })

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = 'Elimina';
  deleteBtn.addEventListener('click', () => {
    eliminaAtleta(atleta.id);
    renderAtleti();
  })

  card.append(imgAtleta, nomeAtleta, disciplinaAtleta, atletaSquadra, deleteBtn);

  return card;
}

export function renderAtleti(): void {
  // TODO: svuota il container e aggiungi una card per ogni atleta visibile.
  container.innerHTML = '';
  for(const a of getAtletiVisibili()) {
    container.appendChild(creaCard(a))
  }
}
