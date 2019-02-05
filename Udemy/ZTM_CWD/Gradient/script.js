let output = document.getElementById('output');
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let body =  document.getElementById('gradient');
let randomButton = document.getElementById('random');


console.log(output);
console.log(color1);
console.log(color2);

function changeBackground(){
    let localGrafient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    body.style.background = localGrafient;
    output.textContent = localGrafient+';';
}

function generateRandomColors(){
    color1.value = pickRandomColor();
    color2.value = pickRandomColor();
    changeBackground();
}

function pickRandomColor(){
    return '#'+rndRGB()+rndRGB()+rndRGB();
}

function rndRGB(){
    return Math.floor(Math.random()*255).toString(16);
}

color1.addEventListener('input',changeBackground);
color2.addEventListener('input',changeBackground);
randomButton.addEventListener('click',generateRandomColors);


changeBackground();