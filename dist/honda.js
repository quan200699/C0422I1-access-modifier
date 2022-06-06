"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Honda = void 0;
const car_1 = require("./car");
class Honda extends car_1.Car {
    setBrandToHonda() {
        this.helloWorld();
        this._brand = 'Honda';
    }
    helloWorld() {
        console.log('hello world');
    }
}
exports.Honda = Honda;
