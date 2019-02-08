
function convertColor(color) { //#FFFFFF or rgb(255,255,255)

    let toHex = color.includes('rgb');

    let red = convertComponent(color, 'red', toHex);
    let green = convertComponent(color, 'green', toHex);
    let blue = convertComponent(color, 'blue', toHex);

    if (toHex){
        return '#' + red.toUpperCase() + green.toUpperCase() + blue.toUpperCase();
    } else {
        return `rgb(${red},${green},${blue})`;
    }
}

function convertComponent(colorString, component, toHex) {

    switch (component) {
        case 'red':
            return (toHex) ? Number(colorString.slice(4,7)).toString(16) : parseInt(colorString.slice(1,3),16);
        case 'green':
            return (toHex) ? Number(colorString.slice(8,11)).toString(16) : parseInt(colorString.slice(3,5),16);
        case 'blue':
            return (toHex) ? Number(colorString.slice(12,15)).toString(16) : parseInt(colorString.slice(5),16);
        default:
            return null;
    }

}

console.log(convertColor('#FFFFFF'));
console.log(convertColor('rgb(255,255,255)'));

