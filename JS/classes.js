'use strict';
console.log('======================= Clases =======================');

class Ass {
    constructor(x, y, z){
        this._x = x;
        this._y = y;
        this._z = z;
        this._volume = x*y*z;
    }

    fart(){
        console.log(`hello, I am ass: ${this._volume} meters`);
        return this._volume + ' ass';
    }
}

let bigAss = new Ass(100,100,100, 10000101, 'lalalala');

bigAss.fart();

export {bigAss};