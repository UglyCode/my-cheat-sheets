var sum = function (a, b) {
    return a + b;
};
var s = sum(4, 5);
var n = sum(4, 6);
console.log(s);
//boolean
var isWeb = true;
//number
var age = 21;
//string
var newName = "q" + s;
//Array
var films = ['mib', 'sleepy hollow'];
var foob = ['wine', 'burger'];
//objects
var coolGuy = {
    name: 'anton'
};
//null
var whoa = undefined;
var yaaya = null;
// Tuple
var fusion;
fusion = ['money', 10000000];
//Enum
var Sizw;
(function (Sizw) {
    Sizw[Sizw["small"] = 1] = "small";
    Sizw[Sizw["medium"] = 2] = "medium";
    Sizw[Sizw["large"] = 3] = "large";
})(Sizw || (Sizw = {}));
var size = Sizw[2];
var size2 = Sizw.small;
//Any
//void
var laugh = function () {
    console.log('lalala');
};
var sayLala = function () {
    return 'lalala';
};
//never
var error = function () {
    throw Error('oopss');
};
var msuculusDescribeGirl = function (girl) {
    console.log(girl);
};
var man = {};
man.count;
//function
var msuculusDescribeMan = function (girl) {
    console.log(girl);
};
//Class
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = 'Ant'; //public, readonly
        this.name = name;
    }
    Human.prototype.greet = function () {
        return "I am " + this.name;
    };
    return Human;
}());
var nya = new Human('nya');
nya.greet();
//Union type
var mess = 5;
