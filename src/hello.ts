const str: string = 'Hello'
console.log(str)

let someValue: number = 5;
//let someName : any = 'ivan';
let someName: string = 'ivan';
let isTrue: boolean = true;
let arr = [1, 2, 3, 4];

enum Meals { vodka, vine };

let alexinfo: [string, string, number];

alexinfo = ['alex', 'alex', 5];

let animals: string[] = ['alex', 'alex', 'alex'];

let obg = {
    name: "string",
    age: 5
};


let id: number | boolean;

id = true;

let summary: any;

summary = 1800;
summary = 'two thouthands';

//let result: number = summary / 18;

let someThing: any = 'hello students';

let StringLength: number = (someThing as string).length;

class student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getinfo(): string {
        return 'name ' + this.name + 'age' + this.age;
    }
}

interface IStudent {
    name: string;
    age: number;
    getName(name: string): string;
}

class NewStudent implements IStudent {
    name: string;
    age: number;
    getName(name: string) {
        return this.name;
    }
}

