'use strict';
console.log('======================= Clases =======================');

class Jopa {
    constructor(x, y, z){
        this._x = x;
        this._y = y;
        this._z = z;
        this._volume = x*y*z;
    }

    fart(){
        console.log(`hello, I am jopa: ${this._volume} meters`);
        return this._volume + 'jop';
    }
}

let bigJopa = new Jopa(100,100,100, 10000101, 'jop');

bigJopa.fart();

export {bigJopa};