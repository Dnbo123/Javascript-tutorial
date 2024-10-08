const toDoList = [{ 
    name: 'Get the Bag',
    dueDate: '13-9-2024'
}, { 
     name: 'Get a new spot',
     dueDate: '01-10-2025'
    }];
renderToDo();

function renderToDo() {

let toDoListHTML = '';

for(let i = 0; i < toDoList.length; i++) {
    const toDoObject = toDoList[i];
   // const name = toDoObject.name;
   // const dueDate = toDoObject.dueDate;
   const {name, dueDate} = toDoObject;
    const html = `
       <div>${name}</div>
        <div>${dueDate}</div> 
          <button onClick="
          toDoList.splice(${i}, 1);
          renderToDo();
          " class="input-delete">Delete</button>
    `;
    toDoListHTML += html;
}
console.log(toDoListHTML);

document.querySelector('.js-list').innerHTML = toDoListHTML;
}

function addInput() {
const inputElement = document.querySelector('.js-toDo-input');
const name = inputElement.value;

const dateInputElement = document.querySelector('.js-due-date-input');
const dueDate = dateInputElement.value;

console.log(name);

toDoList.push({
    name,
    dueDate
});
console.log(toDoList);

inputElement.value = '';

renderToDo();
}