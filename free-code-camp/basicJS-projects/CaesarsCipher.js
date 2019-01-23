'use strict';

const firstSymCode = 'A'.charCodeAt(0);

function rot13(str) { // LBH QVQ VG!
    str = str.toUpperCase();
    let strConvert = '';
    // str.replace(/[^A-Z]/g, '#');

    for (let i = 0; i < str.length; i++){
        if (str[i] < 'A' || str[i] > 'Z') {
            strConvert += str[i];
        } else {
            strConvert += String.fromCharCode((str.charCodeAt(i) + 13 - firstSymCode) % 26 + firstSymCode);
        }
    }

    return strConvert;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));