"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(color, numberOfWheels, brand, name) {
        this._color = color;
        this._numberOfWheels = numberOfWheels;
        this._brand = brand;
        this._name = name;
    }
    static getCar() {
        Car.hello();
    }
    static hello() {
        console.log('hello car');
    }
    getString() {
        Car.getCar();
        console.log('haha');
    }
    get color() {
        return this._color;
    }
    set numberOfWheels(value) {
        this._numberOfWheels = value;
    }
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
exports.Car = Car;
