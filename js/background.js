//Saved Image source names
const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

//choose random images
const chosenImage = images[Math.floor(Math.random() * images.length)];

//create <img> tag
const bgimage = document.createElement("img");

//add img src 
bgimage.src = `img/${chosenImage}`;
bgimage.id = "bg";
console.log(bgimage);

//append img tag on the body
const container = document.querySelector(".container");
container.appendChild(bgimage);