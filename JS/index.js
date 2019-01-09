"use strict";
import {PRIMITIVE} from './primitive.js';
console.log(''); //import goes first!
import {foo,bar} from './functions.js';
console.log('');
import {variVar1 as v,variLet1 as l,variConst1 as c} from './scope.js';
console.log('');
import {bigJopa} from './classes.js';
console.log('');

console.log(`======================= End of main script! ======================= 
${PRIMITIVE}
${foo.nya()} ${bar.age} //function nya() execute before logging to console. Obvious!
${v + l + c}
${bigJopa.fart()} private: ${bigJopa._volume}`);