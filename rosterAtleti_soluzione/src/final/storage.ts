import type { Atleta } from "../types";

// La chiave sotto cui salviamo i dati: una costante evita errori di battitura.
const CHIAVE = "atleti";

// Restituisce true se il salvataggio e' riuscito, false altrimenti.
// Puo' fallire quando si supera il limite del localStorage (circa 5 MB),
// cosa facile se le foto sono salvate come data URL.
export function salva(atleti: Atleta[]): boolean {
  try {
    // localStorage accetta solo stringhe: l'array va convertito in JSON.
    localStorage.setItem(CHIAVE, JSON.stringify(atleti));
    return true;
  } catch {
    return false;
  }
}

export function carica(): Atleta[] {
  const testo = localStorage.getItem(CHIAVE);

  // getItem restituisce null se la chiave non esiste (prima apertura).
  if (testo === null) return [];

  try {
    const dati: unknown = JSON.parse(testo);
    // Se nel localStorage c'e' qualcosa di inatteso, ripartiamo da zero.
    return Array.isArray(dati) ? (dati as Atleta[]) : [];
  } catch {
    // JSON.parse lancia un errore se il testo non e' JSON valido.
    return [];
  }
}
