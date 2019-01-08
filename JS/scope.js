'use strict';
console.log('======================= Scope of variables module load =======================');
var p =1;
print(); //vars  $ undefined, lets and consts - error.

var variVar1 = 'anywhere_var';
let variLet1 = 'anywhere_let';
const variConst1 = 'anywhere_const';

{
    var variVar2 = 'justhere_var'; //defined everywhere
    let variLet2 = 'justhere_let'; // not defined outside brackets, even at other functions. called from here
    const variConst2 = 'justhere_const'; // not defined outside brackets, even at other functions. called from here
    console.log(`In bracket: ${variVar2}, ${variLet2}, ${variConst2}.` );
    summ();
    print(); // let2 & const2 didn't define in function print
}

function foo() {
    var variVar3 = 'function_var'; // not defined outside function, even at other functions. called from here
    let variLet3 = 'function_let'; // not defined outside function, even at other functions. called from here
    const variConst3 = 'function_const'; // not defined outside function, even at other functions. called from here
    console.log(`In function: ${variVar3}, ${variLet3}, ${variConst3}.` );

    print();
}
foo();

function summ(){
    try {
        console.log(variVar2 + variLet2 + variConst2);
    } catch (e) {
        console.log(e);
    }
}


for (var variVar1 = 1; variVar1<2; variVar1++){

}

for (let variLet1 = 1; variLet1<2; variLet1++){

}

//does not work, of course.
// for (const variConst3 = 1; variConst3<2; variConst3++){
//
// };
console.log(`After loops: ${variVar1}, ${variLet1}, ${variConst1}.` );
print(); // var 3 not defined - infunction var scope.

function print() {
    try {
        console.log(`${p}: var[1-3]:  ${variVar1}, ${variVar2}, ${variVar3}`);
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(`${p}: let[1-3]:  ${variLet1}, ${variLet2}, ${variLet3}`);
    } catch (e) {
        console.log(e);
    }
    try {
        console.log(`${p}: const[1-3]:  ${variConst1}, ${variConst2}, ${variConst3}`);
    } catch (e) {
        console.log(e);
    }
    console.log('end of print ' + p++);
}

export {variVar1,variLet1,variConst1}; //cant export let2-3 and const2-3. Exports go first, before head prints of other modules!