class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let point = new Point(1, 2);
point.x = 3;
point.draw();

/*class Point {
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point) {
        //...
    }
}

let point = new Point(1, 2);
point.draw(); */

/*interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
    // ...
}

drawPoint({
    x: 1,
    y: 2
}) */

/*let log = function(message){
    console.log(message);
}

let doLog = () => console.log(); */

/*let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c'); */

/*let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1,true,'a',false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3 };
let backgroundColor = Color.Red; */

/*let a;
a = 1;
a = true;
a = 'a';*/

/*let count = 5;
count = 'a';*/

/*
function log(message) {
    console.log(message);
}

var message = 'Hello World';

log(message);

function doSomething(){
    for (var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log('Finally: ' + i);
}

doSomething(); */