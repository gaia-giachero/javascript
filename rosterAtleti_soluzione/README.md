# Roster Atleti – progetto di partenza

Esercizio di TypeScript con moduli (`import` / `export`).
Il testo dell'esercizio e' nel documento consegnato dall'insegnante.

## Avvio

```bash
npm install
npm run dev
```

Poi apri l'indirizzo mostrato nel terminale (di solito http://localhost:5173).

## Struttura

```
index.html                    pagina (gia' pronta)
public/placeholder.svg        foto di riserva (usata dalla versione final)
src/style.css                 stile (gia' pronto, condiviso)
src/types.ts                  tipi (gia' pronto, condiviso)

src/starter/                  versione di partenza
  main-starter.ts             DA COMPLETARE
  storage.ts                  DA COMPLETARE
  state.ts                    DA COMPLETARE
  render.ts                   DA COMPLETARE

src/final/                    versione completa (bonus compresi)
  main-final.ts               solo eventi
  storage.ts                  localStorage
  state.ts                    stato e funzioni per modificarlo
  render.ts                   card e contatore
  file.ts                     lettura della foto da file
```

Nella versione starter cerca i commenti `TODO` in ogni file: ti dicono cosa scrivere.

## Passare da una versione all'altra

In fondo a `index.html` ci sono due righe `<script>`: una attiva e una commentata.
Sposta il commento per scegliere quale versione caricare.

```html
<script type="module" src="/src/starter/main-starter.ts"></script>
<!-- <script type="module" src="/src/final/main-final.ts"></script> -->
```

Le due versioni usano lo stesso `localStorage` del browser.

## Controllo degli errori di tipo

```bash
npx tsc
```
