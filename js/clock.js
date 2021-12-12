const clock = document.querySelector("#clock");

function getTime () {
    //Call for Date object
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;


}
//As soon as the web is loaded, it calls for getTime ();
getTime ();
//setInterval --> Repeat calling sayHi() after 5 seconds since it's loaded 
setInterval(getTime, 1000);

//setTimeout --> It gives 5s timeout once the page is loaded and runs the function once
//setTimeout(sayHi, 5000);

