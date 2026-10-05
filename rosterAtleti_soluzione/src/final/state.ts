import type { Atleta, Filtro } from "../types";
import { carica, salva } from "./storage";

// Lo stato vive SOLO in questo file.
// Dagli altri file si modifica esclusivamente con le funzioni esportate.
let atleti: Atleta[] = carica();
let filtroCorrente: Filtro = "tutti";

// Restituisce false se l'atleta non puo' essere salvato (localStorage pieno):
// in quel caso non viene aggiunto, cosi' pagina e dati salvati restano allineati.
export function aggiungiAtleta(nome: string, disciplina: string, foto: string): boolean {
  const nuovo: Atleta = {
    id: Date.now(), // i millisecondi correnti: un id diverso a ogni aggiunta
    nome,
    disciplina,
    foto,
    inSquadra: false,
  };

  atleti.push(nuovo);

  if (!salva(atleti)) {
    atleti.pop();
    return false;
  }
  return true;
}

export function eliminaAtleta(id: number): void {
  // filter crea un nuovo array con tutti gli atleti tranne quello eliminato.
  atleti = atleti.filter((atleta) => atleta.id !== id);
  salva(atleti);
}

export function impostaInSquadra(id: number, inSquadra: boolean): void {
  const atleta = atleti.find((a) => a.id === id);
  if (!atleta) return;

  atleta.inSquadra = inSquadra;
  salva(atleti);
}

export function impostaFiltro(filtro: Filtro): void {
  // Il filtro non viene salvato: a ogni apertura si riparte da "tutti".
  filtroCorrente = filtro;
}

export function getAtletiVisibili(): Atleta[] {
  switch (filtroCorrente) {
    case "inSquadra":
      return atleti.filter((atleta) => atleta.inSquadra);
    case "riserve":
      return atleti.filter((atleta) => !atleta.inSquadra);
    case "tutti":
      return atleti;
  }
}

// Bonus "contatore": i numeri si calcolano su TUTTI gli atleti,
// non solo su quelli visibili con il filtro corrente.
export function getConteggio(): { inSquadra: number; totale: number } {
  return {
    inSquadra: atleti.filter((atleta) => atleta.inSquadra).length,
    totale: atleti.length,
  };
}
