import "./style.css";
import type { Todo } from "./type/Todo";

let ToDoList: Todo[] = [
  { id: 1, attivita: "Fare esercizi", completata: true },
  { id: 2, attivita: "Fare spesa", completata: false },
];

console.log(ToDoList);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>To Do List</h1>
  <div class='box-list'>
    <input id='inputAttivita' type='text' placeholder='Inserisci l'attività...' />
    <button id='btn' type='button'>Aggiungi</button>
    <div id="filtri">
      <button id="tutte" type="button" class="btn-filtri">Tutte</button>
      <button id="daFare" type="button" class="btn-filtri">Da Fare</button>
      <button id="completate" type="button" class="btn-filtri">Completate</button>
    </div>
    <ul id='lista'></ul>
  </div>
`;

let attivitaInput = document.querySelector<HTMLInputElement>("#inputAttivita");
let button = document.querySelector<HTMLButtonElement>("#btn");
let listaToDo = document.querySelector("#lista");

let bntTutte = document.querySelector("#tutte");
let bntDaFare = document.querySelector("#daFare");
let bntCompletate = document.querySelector("#completate");

renderTodo(ToDoList);

function renderTodo(lista: Todo[]) {
  let renderLista = ``;

  for (let i = 0; i < lista.length; i++) {
    renderLista += `
      ${
        lista[i].completata
          ? `<li class="completata"><input type="checkbox" data-id="${lista[i].id}" class="check" checked>`
          : `<li class="non-completata"><input type="checkbox" data-id="${lista[i].id}" class="check">`
      } 

        ${lista[i].attivita} 
        
        <button data-id="${lista[i].id}" class="btn-elimina" type="button">Elimina</button>
      </li>
    `;
  }

  listaToDo!.innerHTML = renderLista;

  let btnElimina = document.querySelectorAll(".btn-elimina");

  for (let i = 0; i < btnElimina.length; i++) {
    btnElimina[i]?.addEventListener("click", (e) => {
      let btnId = Number((e.target! as HTMLButtonElement).dataset.id);

      console.log("Bottone cliccato:", e.target);
      console.log("ID ricevuto:", btnId);

      eliminaToDo(btnId);
    });
  }

  let checkInput = document.querySelectorAll(".check");

  for (let i = 0; i < checkInput.length; i++) {
    checkInput[i]?.addEventListener("change", (e) => {
      let checkId = Number((e.target! as HTMLInputElement).dataset.id);

      const todoTrovata = lista.find((todo) => todo.id === checkId);
      console.log(todoTrovata);

      todoTrovata!.completata = (e.target! as HTMLInputElement).checked;

      renderTodo(lista);
    });
  }
}

const addToDo = () => {
  let maxId = ToDoList[0].id ? ToDoList[0].id : 0;

  for (let i = 0; i < ToDoList.length; i++) {
    // console.log('ID partenza: ', maxId)

    if (ToDoList[i].id > maxId) {
      maxId = ToDoList[i].id;
    }
  }
  console.log("ID max: ", maxId);

  let nuovoToDo = {
    id: maxId + 1,
    attivita: attivitaInput!.value,
    completata: false,
  };

  if (nuovoToDo.attivita !== "") {
    ToDoList.push(nuovoToDo);
    // console.log(ToDoList);
    console.log("Nuovo ID: ", maxId);
    renderTodo(ToDoList);
  }
};

button?.addEventListener("click", addToDo);

function eliminaToDo(btnId: number) {
  console.log("ID da eliminare:", btnId);
  console.log("Lista PRIMA:", ToDoList);

  let newToDoList = ToDoList.filter((todo) => {
    return todo.id !== btnId;
  });

  console.log("Lista DOPO:", newToDoList);

  ToDoList = newToDoList;
  renderTodo(ToDoList);
}

bntTutte?.addEventListener("click", () => {
  renderTodo(ToDoList);
});

bntDaFare?.addEventListener("click", () => {
  let ToDoDaFare = [];
  for (let i = 0; i < ToDoList.length; i++) {
    if (ToDoList[i].completata === false) {
      ToDoDaFare.push(ToDoList[i]);
    }
  }
  renderTodo(ToDoDaFare);
});

bntCompletate?.addEventListener("click", () => {
  let ToDoCompletate = [];
  for (let i = 0; i < ToDoList.length; i++) {
    if (ToDoList[i].completata === true) {
      ToDoCompletate.push(ToDoList[i]);
    }
  }
  renderTodo(ToDoCompletate);
});
