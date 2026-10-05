// Bonus "caricamento della foto da file".
// Questo file ha una sola responsabilita': leggere un file scelto dall'utente.

// Legge il file e lo restituisce come data URL: una stringa che contiene
// l'immagine stessa (es. "data:image/png;base64,...") e che si puo' usare
// come src di una <img> e salvare nei dati dell'atleta.
//
// FileReader lavora in modo asincrono: la Promise permette a chi chiama
// di aspettare il risultato con await.
export function leggiComeDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      // Con readAsDataURL il risultato e' sempre una stringa.
      resolve(reader.result as string);
    });
    reader.addEventListener("error", () => {
      reject(reader.error);
    });

    reader.readAsDataURL(file);
  });
}
