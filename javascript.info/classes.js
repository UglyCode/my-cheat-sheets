'use strict';

//1.1
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function() {
    console.log(this.name + ' walks');
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype.__proto__ = Animal.prototype;

Rabbit.prototype.walk = function() {
    console.log(this.name + " bounces!");
};

let anim = new Animal('blabal');
let rabb = new Rabbit('lalala');
// anim.walk();
// rabb.walk();


//1.2
function Clock({ template }) {

    this.template = template;

}
Clock._timer = undefined;

Clock.prototype._render = function() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

    console.log(output);
};

Clock.prototype.stop = function() {
    clearInterval(this._timer);
};

Clock.prototype.start = function() {
    this._render();
    this._timer = setInterval(() => this._render, 1000);
};


// let clock = new Clock({template: 'h:m:s'});
// clock.start();
// let clock2 = new Clock({template: 's:m:h'});
// clock2.start();

//2
class ClockClass {

    constructor({ template }){
        this._template = template;
    }

    _render(){
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this._template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop(){
        clearInterval(this._timer);
    }

    start(){
        this._render();
        this._timer = setInterval(() => this._render(), 1000);
    }
}

const clockClass = new ClockClass({template: 'h:m:s'});
clockClass.start();