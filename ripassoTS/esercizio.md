**Esercizio: mini progetto Vite + TypeScript**  

Segui le consegne qui sotto e prova a completarle da solo, senza guardare soluzioni già pronte.  
L'obiettivo è ripassare i moduli, le esportazioni/importazioni e la differenza tra tipi (a compile time) e
valori (a runtime).  

**1. Creare il progetto**  
☐ Apri il terminale e crea un nuovo progetto Vite.  
☐ Quando ti viene chiesto il framework, scegli la variante Vanilla.  
☐ Quando ti viene chiesta la variante, scegli TypeScript.  
☐ Dai un nome al progetto a tua scelta.  

**2. Avviare il server di sviluppo**  
☐ Entra nella cartella del progetto appena creato.  
☐ Installa le dipendenze del progetto.
☐ Avvia il server di sviluppo.  
☐ Verifica che nel terminale compaia un indirizzo locale e aprilo nel browser.  

**3. Creare una funzione in un modulo separato**  
☐ Nella cartella src, crea un nuovo file chiamato matematica.ts.  
☐ Scrivi una funzione chiamata somma che prende due parametri numerici e restituisce la loro
somma.  
☐ Ricordati di rendere la funzione utilizzabile anche da altri file.  

**4. Usare la funzione in main.ts**  
☐ Apri il file main.ts.  
☐ Rendi disponibile la funzione somma scritta nel file matematica.  
☐ Richiama la funzione con due numeri a tua scelta.  
☐ Stampa il risultato in modo da poterlo vedere nella console del browser.  
☐ Apri la console degli strumenti per sviluppatori e verifica il risultato.  

**5. Definire un'interfaccia**  
☐ Crea un nuovo file chiamato User.ts nella cartella src.  
☐ Definisci una struttura (interfaccia) che rappresenti un utente, con un campo per il nome (testo) e
un campo per l'età (numero).  
☐ Rendi anche questa struttura disponibile ad altri file.  

**6. Usare l'interfaccia come tipo**  
☐ In main.ts, importa la struttura definita al punto precedente usando la sintassi pensata apposta per
importare solo tipi.  
☐ Dichiara un oggetto che rispetti quella struttura, con un nome e un'età a tua scelta.  
☐ Prova a modificare uno dei valori con un tipo sbagliato (per esempio scrivere del testo dove è
previsto un numero) e osserva cosa succede nell'editor.  

**Domande di riflessione**  
*Rispondi con parole tue, senza consultare la guida risolta:*  
☐ Che differenza c'è tra un file che esporta un valore e uno che esporta soltanto un tipo?  
☐ Cosa succede, a livello di codice generato, quando si usa import type invece di un import
normale?  
☐ Perché un'interfaccia non produce codice eseguibile a runtime?  
☐ In che punto del processo (scrittura del codice, compilazione, esecuzione nel browser) TypeScript
controlla che i tipi siano rispettati?