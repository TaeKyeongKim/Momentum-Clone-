
//Be sure to make the API_KEY as string
const API_KEY ="cc9adc5ce92a3b5e53924dedbc9ca38a";

//if getCurrentPosition is succeed , it calls onGeoOk function with geolocation object information
function onGeoOk(pos){
    const lat = pos.coords.latitude; 
    const long = pos.coords.longitude;

    console.log(lat,long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const city= document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const temp =  document.querySelector("#weather span:nth-child(3)");

        city.innerHTML = data.name;
        weather.innerHTML = data.weather[0].main;
        temp.innerHTML = `${data.main.temp} Celsius`;
        
    
    });
}

function onGeoError(){
    alert("Can't find you.!");
}

//getCurrentPosition requires 2 arugments, 1. successfull callback 2. fail callback
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
console.log("hello");