
function power(a,b) {
    return a*b;
}

let twice = power.bind(null,2);

console.log(twice(2));
console.log(twice(3));
console.log(twice(4));