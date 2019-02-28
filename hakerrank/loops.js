'use strict';

function vowelsAndConsonants(s) {
    const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    let vowelsStr = '';
    let consonantStr = '';
    for (let i = 0; i < s.length; i++){
        if (vowelsArr.indexOf(s[i]) < 0) {
            consonantStr += s[i];
        } else {
            vowelsStr += s[i];
        }
    }

    (vowelsStr + consonantStr).split('').forEach((elem) => {
        console.log(elem);
    });

}

vowelsAndConsonants('javascriptloops');