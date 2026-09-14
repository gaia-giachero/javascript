import './style.css'
import type { Todo } from './type/Todo'

const ToDoList: Todo = [
  {id: 1, attivita: 'Fare esercizi', completata: true},
  {id: 2, attivita: 'Fare spesa', completata: false}
]

console.log(ToDoList)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>To Do List</h1>
  <div class='box-list'>
    <input id='lista' type='text' placeholder='Inserisci l'attività...' />
    <button id='btn' type='button'>Aggiungi</button>
    <ul id='lista'></ul>
  </div>
`

let attivitaInput = document.querySelector('#inputAttivita');
let button = document.querySelector('#btn');
let listaToDo = document.querySelector('#lista')

const addToDo = () => {
  ToDoList.push(attivitaInput.value)
  console.log(ToDoList)
}
button?.addEventListener('click', addToDo)
