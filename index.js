const fullpage = document.querySelector(".fullpage");
const keypress = document.querySelector(".keypress");
const pressedKey = document.createElement("div");

pressedKey.classList.add("pressed-Key");

document.addEventListener("keydown", (event) => {  
    // event.preventDefault();//not be necessary here

    let audio = new Audio("key-press-audio.mp3");
    audio.play();

    const codeContainer = document.createElement("div");
    codeContainer.classList.add("code-Container");
   
    fullpage.innerHTML = "";
    
     
     pressedKey.innerHTML = `You Pressed  <span class ="keyname">  ${event.key} </span>`;
     codeContainer.innerHTML = `${event.keyCode}`;
     
     fullpage.appendChild(pressedKey);
     fullpage.appendChild(codeContainer);
});
