"use strict";
import {PRIMITIVE} from './primitive.js';
console.log(''); //import goes first!
import {foo,bar} from './functions.js';
console.log('');

console.log(`======================= End of main script! ======================= 
${PRIMITIVE}
${foo.nya()} ${bar.age}`); //function nya() execute before logging to console. Obvious!