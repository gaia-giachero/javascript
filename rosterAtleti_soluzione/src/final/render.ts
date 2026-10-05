import type { Atleta } from "../types";
import { eliminaAtleta, getAtletiVisibili, getConteggio, impostaInSquadra } from "./state";

const container = document.querySelector<HTMLDivElement>("#atleti-list")!;
const contatore = document.querySelector<HTMLParagraphElement>("#contatore")!;

// Bonus "foto di riserva": immagine nella cartella public/.
const FOTO_RISERVA = "/placeholder.svg";

function creaCard(atleta: Atleta): HTMLElement {
  const card = document.createElement("div");
  card.className = "card";
  if (atleta.inSquadra) {
    card.classList.add("in-squadra");
  }

  const img = document.createElement("img");
  img.src = atleta.foto;
  img.alt = atleta.nome;
  // Se la foto non si carica, mostriamo quella di riserva.
  // once: true evita un ciclo infinito se anche la riserva non si caricasse.
  img.addEventListener(
    "error",
    () => {
      img.src = FOTO_RISERVA;
    },
    { once: true },
  );

  // textContent (e non innerHTML): il testo scritto dall'utente
  // non viene mai interpretato come HTML.
  const titolo = document.createElement("h3");
  titolo.textContent = atleta.nome;

  const disciplina = document.createElement("p");
  disciplina.textContent = atleta.disciplina;

  // La checkbox sta dentro la <label>: cosi' si attiva anche cliccando sul testo.
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = atleta.inSquadra;
  checkbox.addEventListener("change", () => {
    impostaInSquadra(atleta.id, checkbox.checked);
    renderAtleti();
  });
  label.append(checkbox, " In squadra");

  const eliminaBtn = document.createElement("button");
  eliminaBtn.textContent = "Elimina";
  eliminaBtn.addEventListener("click", () => {
    // Bonus "conferma": se l'utente annulla, non succede nulla.
    if (!confirm(`Eliminare ${atleta.nome}?`)) return;

    eliminaAtleta(atleta.id);
    // Il nuovo render non ricrea la card: sparisce anche la sua <img>.
    renderAtleti();
  });

  card.append(img, titolo, disciplina, label, eliminaBtn);
  return card;
}

function renderContatore(): void {
  const { inSquadra, totale } = getConteggio();
  contatore.textContent = `${inSquadra} atleti in squadra su ${totale}`;
}

export function renderAtleti(): void {
  // Si ridisegna tutto da capo: prima si svuota, poi si ricrea ogni card.
  container.innerHTML = "";

  for (const atleta of getAtletiVisibili()) {
    container.append(creaCard(atleta));
  }

  // Il contatore si aggiorna qui, cosi' e' corretto dopo ogni modifica ai dati.
  renderContatore();
}
