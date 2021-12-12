const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");
let toDos = [];
const TO_DOS = "toDos";

//4. saving toDo list 
function saveToDos(event) {
    //save predefined toDos array.
    localStorage.setItem(TO_DOS, JSON.stringify(toDos));
}


//3. Delete selected todo list 
function deleteTodo(event){
    //We can identify which li called this event by inspecting event.target object. 
    console.log(event.target);
    console.dir(event.target.parentElement.innerText);

    //I designate the selected li element 
    const li = event.target.parentElement;


    //Remove the list on page
    li.remove();

    // //Create new array excluding the item that is to be deleted using Filter 
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    saveToDos();
}

//2. Creating HTML element
function paintToDo(newTodo){
    //Desired structure of HTML is 
    // <li> 
    //      <span> lalalal </span>
    //      <button> X </button>
    //</li>


    const list = document.createElement("li");
    list.id = newTodo.id

    const span = document.createElement("span");

    span.innerHTML = newTodo.text;

    const button = document.createElement("button");
    button.innerHTML = "X";
    
    //Calls for deleteing selected toDo list function 
    button.addEventListener("click", deleteTodo);

    list.appendChild(span);
    list.appendChild(button);
    todoList.appendChild(list);
}

//1. Make event handler of TO-DO list form
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    //empty the input of the form
    todoInput.value = "";    

    //Create toDo Object 
    const newTodoObj = {
        text:newTodo,
        id :Date.now(),
    }

    //Push new item into to-do list 
    toDos.push(newTodoObj);
    
    //Calling a paint function
    paintToDo(newTodoObj);

    //Calling save toDos function 
    saveToDos();


}


todoForm.addEventListener("submit",handleToDoSubmit);

// function sayHi(item){
//     console.log("Hello!" +  item);
// }

//Retrive saved local storage toDos array
const savedtoDos = localStorage.getItem(TO_DOS);

//check whether savedtoDos are empty or not 
if(savedtoDos !== null) {
    
    const parsedToDos = JSON.parse(savedtoDos);
    //Let the list to stay in the web after refreshing the page. This however still makes problem, writing over the existing 
    //savedtoDos when refreshed. 
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);

}  


