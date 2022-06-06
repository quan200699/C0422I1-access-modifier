export class Car {
    private _color: string;
    private _numberOfWheels: number;
    protected _brand: string;
    private _name: string;


    constructor(color: string, numberOfWheels: number, brand: string, name: string) {
        this._color = color;
        this._numberOfWheels = numberOfWheels;
        this._brand = brand;
        this._name = name;
    }

    public static getCar() {
        Car.hello();
    }

    private static hello(){
        console.log('hello car');
    }

    getString(){
        Car.getCar();
        console.log('haha');
    }

    get color(): string {
        return this._color;
    }


    set numberOfWheels(value: number) {
        this._numberOfWheels = value;
    }

    get brand(): string {
        return this._brand;
    }

    set brand(value: string) {
        this._brand = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}
