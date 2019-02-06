
//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

class Animal {
    constructor(name, color, type){
        this.name = name;
        this.color = color;
        this.type = type;
    }
    introduce(){
        console.log(`Hi i'm a ${this.type} color of ${this.color} and my name is ${this.name} !`);
    }
}

class Mammal extends Animal{
    constructor(name, color, type, sex){
        super(name, color, type);
        this.sex = sex;
    }
    introduce() {
        super.introduce();
        console.log(`As you see, I'm a ${this.sex}.`);
    }
    feed() {
        console.log('Omm-nom-nom');
    }
}

const cow = new Mammal('Holyhooo', 'brown', 'cow', 'female');

cow.introduce();
cow.feed();