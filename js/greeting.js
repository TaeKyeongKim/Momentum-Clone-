const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");



//It is better to save as a constant variable when there are String type of variables being used repeatly  
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "usrName"



function onLoginSubmit (data){
    data.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);

} 

function paintGreetings(usrName){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    document.querySelector("#todo-form").classList.remove(HIDDEN_CLASSNAME);

    greeting.innerHTML = `Be gritty ${usrName} !`;
}

 //1. Check whether there are local storage variable called "usrName"
 const savedUsername = localStorage.getItem(USERNAME_KEY);
 console.log(savedUsername);
 
if (savedUsername === null){
    //Show form 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //submit happens when pressing "enter" /  button within a Form element
    loginForm.addEventListener("submit",onLoginSubmit); 
}
    else {
    //Show greetings
    paintGreetings(savedUsername);
}


