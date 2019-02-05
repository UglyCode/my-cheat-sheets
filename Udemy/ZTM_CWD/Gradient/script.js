let output = document.getElementById('output');
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let body =  document.getElementById('gradient');


console.log(output);
console.log(color1);
console.log(color2);

function changeBackground(){
    let localGrafient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    body.style.background = localGrafient;
    output.textContent = localGrafient+';';
}


color1.addEventListener('input',changeBackground);
color2.addEventListener('input',changeBackground);