'use strict';

console.log('======================foo================');

let foo = function func() {
    try {
        foo.counter++;
        console.log('call ' + foo.counter);
        console.log(foo.name);
    }catch {
        func.counter++;
        func.errors ++;
        console.log(`error ${func.errors} of ${func.counter} calls`);
        console.log(func.name);
    }
};

foo.counter=0;
foo.errors=0;

foo();
// foo.name = 'bar'; // do not work in use strict mode. Ignore otherwise.
foo();
let foo2 = foo;
foo = undefined;
foo2();

console.log('======================bar================');

function bar(var1, var2, var3 = 'lalala', var4, var5, ...args) {
    bar.counter++;
    console.log(bar.counter,{var1,var2,var3,var4,args});
    console.log(bar.name + '() expect ' + bar.length + ' args');    //Strange. bar.length counts only arguments before first default value?
}                                                                   //Chrome and NodeJS have the same behavior. V8=)
bar.counter=0;

bar();
bar(1);
bar(1,2);
bar(1,2,3,4,5,6,7,8,9);

// let bar = [];

console.log('======================test exercises================');
console.log('\nsum');
//2
let sum = function(a) {
    let sum = a;
    function add(b) {
        sum += b;
        return add;
    }

    add.toString = () => sum;
    return add;
};

console.log(bar);
console.log(String(sum(1)(2)(3)));
console.log(String(sum(6)(-1)(-2)(-3)));

console.log('\ncounter');
//1
function makeCounter() {
    let count = 0;
    let counter =  function () {
        return count++;
    };

    counter.set = (value) => count = value;
    counter.decrease = () => count--;
    return counter;
}

let counter = makeCounter();
console.log( counter() ); // 0
console.log( counter() ); // 1
counter.set(10); // set the new count
console.log( counter() ); // 10
counter.decrease(); // decrease the count by 1
console.log( counter() ); // 10 (instead of 11)