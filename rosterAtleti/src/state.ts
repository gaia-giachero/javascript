import type { Atleta, Filtro } from "./types";
import { carica, salva } from "./storage";

// Lo stato vive SOLO in questo file.
// Dagli altri file si modifica esclusivamente con le funzioni esportate.
let atleti: Atleta[] = carica();
let filtroCorrente: Filtro = "tutti";

export function aggiungiAtleta(nome: string, disciplina: string, foto: string): void {
  // TODO: crea un nuovo Atleta (id univoco, inSquadra: false),
  // aggiungilo all'array e salva.
  atleti.push({ id: Date.now(), nome, disciplina, foto, inSquadra: false });
  salva(atleti);
}

export function eliminaAtleta(id: number): void {
  // TODO: rimuovi l'atleta con quell'id e salva.
  atleti = atleti.filter((a) => a.id !== id);
  salva(atleti);
}

export function impostaInSquadra(id: number, inSquadra: boolean): void {
  // TODO: trova l'atleta, aggiorna inSquadra e salva.
  const atleta = atleti.find((a) => a.id === id);
  if(!atleta) return;
  atleta.inSquadra = inSquadra;
  salva(atleti);
}

export function impostaFiltro(filtro: Filtro): void {
  // TODO: aggiorna filtroCorrente.
  filtroCorrente = filtro;
}

export function getAtletiVisibili(): Atleta[] {
  // TODO: restituisci solo gli atleti che rispettano filtroCorrente.
  return atleti.filter((a) => {
    if(filtroCorrente === "inSquadra") return !a.inSquadra;
    if(filtroCorrente === "riserve") return !a.inSquadra;
    return true;
  })
  // return [];
}
