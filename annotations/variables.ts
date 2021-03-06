let apples: number = 5;

apples = 10;
// apples = 'asdasd';

let speed: string = 'fast';
// speed = 10;

let hasName: boolean = true;

let nothingMuch: null = null;
// nothingMuch = 5;

let nothing: undefined = undefined;

// build in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];

let myNumbere: number[] = [1, 2, 3];

let truths: boolean[] = [true, false, true];

// Classes

class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20,
};

// function
const logNumer: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotations
// 1) Function that return the any type
const json = "{'x' : 10, 'y' : 20}";
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
// and initalizate it later
let word = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < word.length; i++) {
    if (word[i] === 'green') {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
let number = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
        numberAboveZero = number[i];
    }
}
