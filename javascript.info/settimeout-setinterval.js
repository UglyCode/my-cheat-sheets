'use strict';

//1
function printNumbersTimeout(from, to)  {

    setTimeout(function foo () {
        if (from<to) {setTimeout(foo,1000)}
        console.log(from);
        from++;
    },0);

}

function printNumbersInterval(from, to)  {

    let interval = setInterval(function foo () {
        if (from === to) {clearInterval(interval)}
        console.log(from);
        from++;
    },1000);

}

// printNumbersTimeout(5,10);
// printNumbersInterval(5,10);

//2
let i = 0;
let start = Date.now();

function count() {
    if (i === 1000000000) {
        console.log("Timeout => Done in " + (Date.now() - start) + 'ms');
        i = 0;
    } else {
        setTimeout(count, 0);
    }

    // a piece of heavy job
    for(let j = 0; j < 1000000; j++) {
        i++;
    }
}

function count2() {

    let innerCount =  function() {
        if (i === 1000000000) {
            clearInterval(interval);
            console.log("Interval => Done in " + (Date.now() - start) + 'ms');
            i = 0;
        }

        // a piece of heavy job
        for(let j = 0; j < 1000000; j++) {
            i++;
        }
    };

    let interval = setInterval(innerCount, 0);
}

count();
count2();