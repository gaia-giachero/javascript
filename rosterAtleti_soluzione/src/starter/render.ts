import type { Atleta } from "../types";
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
  return card;
}

export function renderAtleti(): void {
  // TODO: svuota il container e aggiungi una card per ogni atleta visibile.
}
