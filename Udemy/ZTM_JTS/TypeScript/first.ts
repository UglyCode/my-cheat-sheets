const sum = (a:number, b:number) => {
    return a+b;
};

const s = sum(4, 5);
const n = sum(4, 6);
console.log(s);


//boolean
let isWeb: boolean = true;
//number
let age: number = 21;
//string
let newName: string = `q${s}`;
//Array
let films: string[] = ['mib','sleepy hollow'];
let foob: Array<string> = ['wine', 'burger'];
//objects
let coolGuy: object = {
  name: 'anton'
};
//null
let whoa:undefined = undefined;
let yaaya:null = null;

// Tuple
let fusion: [string, number];
fusion = ['money', 10000000];

//Enum
enum Sizw {
    small = 1, medium = 2, large=3
}

let size: string = Sizw[2];
let size2: number = Sizw.small;


//Any


//void
let laugh = (): void =>{
  console.log('lalala')
};

let sayLala = (): string =>{
    return 'lalala';
};

//never
let error = ():never => {
  throw Error('oopss');
};

//interface
interface GirlArmy {
    count?: number,
    boobs: 'string',
    fuckeble: boolean
}

let msuculusDescribeGirl = (girl: GirlArmy) => {
  console.log(girl);
};

//Type assertions
interface ManArmy {
    count: number,
    length: 'string',
    hasMoney: boolean
}

let man = {} as ManArmy;
man.count;


//function
let msuculusDescribeMan = (girl: ManArmy): void => {
    console.log(girl);
};

//Class
class Human {
    private readonly name: string = 'Ant'; //public, readonly
    constructor(name: string){
        this.name = name;
    }

    greet(): string {
        return `I am ${this.name}`
    }
}

let nya = new Human('nya');
nya.greet();


//Union type
let mess: string|number = 5;