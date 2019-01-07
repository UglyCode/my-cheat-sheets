"use strict";
console.log('======================= Primitive module load =======================');

const PRIMITIVE = new Map();

PRIMITIVE.set('string', 'just a string');
PRIMITIVE.set('string_space', '   ');
PRIMITIVE.set('string_empty', '');
PRIMITIVE.set('numeric', 11);
PRIMITIVE.set('numeric_zero', 0);
PRIMITIVE.set('numric_nan', NaN);
PRIMITIVE.set('boolean_true', true);
PRIMITIVE.set('boolean_false', false);
PRIMITIVE.set('undefined', undefined);
PRIMITIVE.set('null', null);
PRIMITIVE.set('symbol', Symbol('sym'));
PRIMITIVE.set('symbol_key', Symbol.for('key'));

export {PRIMITIVE};

//Type Conversions tests
let mapToString = new Map();
let mapToNumeric = new Map();
let mapToBoolean = new Map();

PRIMITIVE.forEach((value, key) => {
    try {
        mapToString.set(key, String(value));
    } catch (err) {
        mapToString.set(key, err);
    }
    try {
        mapToNumeric.set(key, Number(value));
    } catch (err) {
        mapToNumeric.set(key, err);
    }
    try {
        mapToBoolean.set(key, Boolean(value));
    } catch (err) {
        mapToBoolean.set(key, err);
    }
});

console.log(mapToString,mapToNumeric,mapToBoolean);

//Type Conversions 'in string' cases
console.log(`1 + true + 2 * false => `, 1+true+2*false);
console.log(`true - 0.5 => `, true-0.5);

console.log(`1 + 1 + '1' + 1 + true => `, 1 + 1 + '1' + 1 + true);
console.log(`!(1 + 1 + '1' + 1 + true) => `, !(1 + 1 + '1' + 1 + true));

console.log(`1 + '1' + !!(1+false) + !!'0' => `, 1 + '1' + !!(1+false) + !!'0');
console.log(`1 + '1' + !!(1+false) + !!'0' - 5 => `, 1 + '1' + !!(1+false) + !!'0' - 5);

console.log(`1 + !!(1+false) + !!'0' + '1' => `, 1 + !!(1+false) + !!'0' + '1');
console.log(`1 + !!(1+false) + !!'0' + '1' - 5 => `, 1 + !!(1+false) + !!'0' + '1' - 5);