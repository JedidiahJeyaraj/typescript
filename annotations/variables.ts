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
