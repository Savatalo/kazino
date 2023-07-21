const button = document.getElementById("button");
const body = document.querySelector("body");
const div = document.getElementsByClassName("div");
let divPara = document.getElementById("div-para");

let userChoice = prompt('Chose color(red,black or green)');

button.addEventListener("click", function () {
  const randomNumber = Math.random();
  let paraChange = divPara;
  let choice = userChoice;
  if (randomNumber < 0.5 && randomNumber > 0.1) {
    body.style.backgroundColor = 'red';
  } else if (randomNumber > 0.5 && randomNumber < 1) {
    body.style.backgroundColor = 'black';} 
    else if (randomNumber < 0.1) {
      body.style.backgroundColor = 'green';
    } 
    console.log(randomNumber);
    if (choice === 'red' && randomNumber < 0.5 && randomNumber > 0.1) {
       paraChange = document.getElementById("div-para").innerHTML = "YOU WIN";
    } else {
      paraChange = document.getElementById("div-para").innerHTML = "YOU LOST";
    }
    if (choice === 'black' && randomNumber < 1 && randomNumber > 0.5) {
      paraChange = document.getElementById("div-para").innerHTML = "YOU WIN";
   } else {
     paraChange = document.getElementById("div-para").innerHTML = "YOU LOST";
   } if (choice === 'red' && randomNumber < 0.5 && randomNumber > 0.1) {
       paraChange = document.getElementById("div-para").innerHTML = "YOU WIN";
    } else {
      paraChange = document.getElementById("div-para").innerHTML = "YOU LOST";
    }
  });
  

