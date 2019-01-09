"use strict";
console.log('======================= Functions module load =======================');

function foo(a,b) {
    if (a>b) {
        console.log((a % b).toFixed(4));
    }else {
        console.log((b%a*100).toString(16));
    }
    return b;
}

let bar = function (a) {

    switch (arguments.length) {
        case 0:
            return 'Start';
        case 1:
            console.log(arguments[0]);
            break;
        case 2:
            console.log(arguments);
        default:
            console.log('default: ' +  arguments);
    }

};

let arr = [];
do {
    console.log(bar(...arr));
    arr.push(arr.length);
} while (arr.length<4);

let rnd = 0.5;
for (let i=0; i < 5; i++){
    rnd = foo(rnd,Math.random());
}

bar.age = 31;
foo.nya = () => 41+Boolean(String(console.log('NYA'))); // I love crazy JS. undefined->string->boolean->number

export {foo, bar};

console.log('');