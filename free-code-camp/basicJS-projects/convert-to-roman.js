'use strict';

let numElement = document.getElementById('num');
let convertButton = document.getElementById('convert');
let resultElement = document.getElementById('result');

const availebleNumbers = [1000,500,100,50,10,5,1];
const romanRoadMap = new Map([[1000,'M'],[500,'D'],[100,'C'],[50,'L'],[10,'X'],[5,'V'],[1,'I']]);


convertButton.addEventListener('click',convert);

function convert(button) {
    let num = Number(numElement.value);
    resultElement.innerText = convertToRoman(num);
}

function convertToRoman(num) {

    if (num >= availebleNumbers[0]*4 || num<0) return 'Hey. enter valid number plz';
    let stringNum = String(num);
    let stringZero = sameCharString('0',stringNum.length-1);
    let romanNumeric = '';

    for (let i=0; i<stringNum.length; i++){
        let currNum = stringNum[i] + stringZero.slice(i);
        console.log(Number(currNum));
        romanNumeric += convertPartToRoman(Number(currNum), stringNum[i]);
    }

    return romanNumeric;
}

function convertPartToRoman(part, base) {

    for (let i = 0; i < availebleNumbers.length; i++) {

        let multiplicator = Math.floor(part/availebleNumbers[i]);
        if (multiplicator < 1) continue;

        let curr = availebleNumbers[i];
        let prev = availebleNumbers[i+1];
        let next = availebleNumbers[i-1];

        if (base === '9') {
            return romanRoadMap.get(prev) + romanRoadMap.get(next); // number like CM = 900
        } else if (base === '4'){
            return romanRoadMap.get(curr) + romanRoadMap.get(next); // number like XL = 40
        } else {
            return sameCharString(romanRoadMap.get(curr), multiplicator)
                + (part%curr ? sameCharString(romanRoadMap.get(prev), (part%curr)/prev) : '');
        }
    }

    return '';
}

function sameCharString(char, length) {
    return new Array(length+1).join(char);
}

// convertToRoman(36);