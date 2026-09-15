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
      <button type="button" class="btn-filtri">Tutte</button>
      <button type="button" class="btn-filtri">Da Fare</button>
      <button type="button" class="btn-filtri">Completate</button>
    </div>
    <ul id='lista'></ul>
  </div>
`;

let attivitaInput = document.querySelector<HTMLInputElement>("#inputAttivita");
let button = document.querySelector<HTMLButtonElement>("#btn");
let listaToDo = document.querySelector("#lista");

renderTodo();

function renderTodo() {
  let renderLista = ``;

  for (let i = 0; i < ToDoList.length; i++) {
    renderLista += `
      ${ToDoList[i].completata ? 
        `<li class="completata"><input type="checkbox" id="${ToDoList[i].id}" class="check" checked>` 
        : 
        `<li class="non-completata"><input type="checkbox" id="${ToDoList[i].id}" class="check">`
      } 

        ${ToDoList[i].attivita} 
        
        <button id="${ToDoList[i].id}" class="btn-elimina" type="button">Elimina</button>
      </li>
    `;
  }

  listaToDo!.innerHTML = renderLista;

  let btnElimina = document.querySelectorAll(".btn-elimina");

  for (let i = 0; i < btnElimina.length; i++) {
    btnElimina[i]?.addEventListener("click", (e) => {
      let btnId = Number((e.target! as HTMLButtonElement).id);
      // console.log(btnId);
      eliminaToDo(btnId);
      // console.log(ToDoList);
    });
  }

  let checkInput = document.querySelectorAll(".check");

  for (let i=0; i<checkInput.length; i++){
    checkInput[i]?.addEventListener("change", (e) => {
      let checkId = Number((e.target! as HTMLInputElement).id);

      const todoTrovata = ToDoList.find(todo => todo.id === checkId);
      console.log(todoTrovata)

      todoTrovata!.completata = (e.target! as HTMLInputElement).checked;

      renderTodo();
    })
  }
}

const addToDo = () => {
  let nuovoToDo = {
    id: ToDoList.length + 1,
    attivita: attivitaInput!.value,
    completata: false,
  };

  if (nuovoToDo.attivita !== "") {
    ToDoList.push(nuovoToDo);
    console.log(ToDoList);
    renderTodo();
  }
};

button?.addEventListener("click", addToDo);

function eliminaToDo(btnId: number) {
  let newToDoList = ToDoList.filter((todo) => {
    return todo.id !== btnId;
  });

  ToDoList = newToDoList;
  renderTodo();
}
