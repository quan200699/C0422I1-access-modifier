import {Car} from "./car";

export class Honda extends Car {
    public setBrandToHonda() {
        this.helloWorld()
        this._brand = 'Honda';
    }

    private helloWorld() {
        console.log('hello world');
    }
}
