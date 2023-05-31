let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input');
//local storage,cookies and little information store to local storage get the information
let todos = []; //
window.onload = ()=>{ //while loading the process if any records in array and that record save in local storage.
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}
//function define
button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)//we have to add todolist
    input.value=''
})

function addtodo(todo){
    let para = document.createElement('p');//create a paragraph
    para.innerText = todo;
    todoList.appendChild(para)
    
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
    let index = todos.indexOf(todo)
    if (index > -1) {
        todos.splice(index, 1);/*The splice() method changes
         the contents of an array by removing or replacing 
        existing elements and/or adding new elements in place.*/
      }
    localStorage.setItem('todos',JSON.stringify(todos))//replace
   
}