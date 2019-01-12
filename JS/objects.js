'use strict';
console.log('======================= Objects module load =======================');

let objLiteral = {
  name: 'Anton',
  age: 30,
  goodPerson: true,
  hobbies: ['JS','TS','Node.JS'],
  sayHi: function (greating = 'Hi') {
      console.log(`${greating}, I am ${this.name} at age of ${this.age} and I am a ${this.goodPerson ? 'good' : 'bad'} Person`);
      console.log('My hobbies: ' + this.hobbies.reduce((aggregate, value, index) => {
          if (index===1) aggregate = `\n[1]: ${aggregate}`;
          return aggregate +=  `\n[${index+1}]: ${value}`;
      }));
  },
  sayThis: function() {return (()=>console.log(this))}
};

objLiteral.sayHi();

let newMe = Object.create(objLiteral);

newMe.work = 'Google';
newMe.sayThisNew = function(){return (()=>console.log(this))};
newMe.smth = 'tl;dr';
newMe.logSmth = function(smth){console.log('goo-goo '+this.smth)};

let testObj = {
    smth: 'lalalala',
    z: newMe
};

function foo() {
    console.log(this);
}

let bar = (()=> console.log(this));

function Nya(tail){
    this.tail = tail;
    return {tail:'smooth', yourTail: this.tail};
}

const cat = new Nya('rubber');

console.log(cat.tail, cat.yourTail);

console.log('own context');
foo();
bar();
newMe.sayThisNew()();
newMe.sayThis()();

console.log('applied context');
foo.apply(objLiteral);
bar.apply(objLiteral);
newMe.sayThisNew().apply(objLiteral);
newMe.sayThis().apply(objLiteral);

console.log('test object nested');
testObj.z.logSmth();

console.log('Prototypes test');
let protoTest1 = {
    name: 'proto literal'
}

let protoTest2 = new Object();
protoTest2.name = 'new created';

function Proto() {
    this.name = 'function generate'
}

let protoTest3 = new Proto();

Object.prototype.sayProto = function(){console.log(`${name}  ${this.__proto__}`)};

console.log(protoTest3.__proto__,protoTest3.__proto__ === Proto, protoTest3.__proto__ === Proto.prototype);



export default {objLiteral};