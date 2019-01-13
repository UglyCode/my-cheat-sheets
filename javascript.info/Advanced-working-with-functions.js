// test exercises from chapter "Advanced working with functions"
'use strict';

// 3
let Sum = function(a){
    return (b) => a + b;
};
console.log(Sum(1)(2));
console.log(Sum(5)(-1));

// 4
function inBetween(a,b){
    return (value) => value >= a && value <= b;
}
function inArray(arr){
    return (value) => arr.indexOf(value)>=0;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

//5
function byField(name){
    return (a,b) => a[name] > b[name] ? 1 : -1;
}
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

//6
function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function() { // shooter function
            console.log(i); // should show its number
        };
        shooters.push(shooter);
    }

    return shooters;
}
let army = makeArmy();
army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...
