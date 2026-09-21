import type { Atleta } from "./types";

// TODO: scegli una chiave per il localStorage (es. "atleti")
const CHIAVE = "atleti";

export function salva(atleti: Atleta[]): void {
  // TODO: salva l'array in localStorage (ricorda JSON.stringify)
  localStorage.setItem(CHIAVE, JSON.stringify(atleti));
}

export function carica(): Atleta[] {
  // TODO: leggi da localStorage e restituisci l'array.
  // Se non c'e' nulla di salvato, restituisci un array vuoto.
  const salvati = localStorage.getItem(CHIAVE);
  return salvati ? (JSON.parse(salvati) as Atleta[]) : [];
}
