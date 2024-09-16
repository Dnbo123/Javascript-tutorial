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

toDoList.forEach((toDoObject, index) => {
    const {name, dueDate} = toDoObject;
     const html = `
        <div>${name}</div>
         <div>${dueDate}</div> 
           <button class="input-delete js-delete-button">Delete</button>
     `;
     toDoListHTML += html;
});

document.querySelector('.js-list').innerHTML = toDoListHTML;

document.querySelector('.js-add-button')
.addEventListener('click', () =>{
    addInput();
});

document.querySelectorAll('.js-delete-button')
.forEach((inputDelete, index) =>{
inputDelete.addEventListener('click', () => {
    toDoList.splice(index, 1);
    renderToDo();
});
});  

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