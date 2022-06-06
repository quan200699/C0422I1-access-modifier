// import {Car} from "./car";
// import {Honda} from "./honda";
//
// let car = new Car('den', 4, 'Honda', 'Xe 01');
// // console.log(car._brand) //Lỗi không thể truy cập do brand là protected
// // console.log(car._numberOfWheels) //Lỗi không thể truy cập do brand là private
// console.log(car.color)
// console.log(car.numberOfWheels)
// Car.getCar()
// // let honda = new Honda('1',3,'2','4');
// // honda.setBrandToHonda();
import * as readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Is this example useful? [y/n] ', (answer) => {
    switch(answer.toLowerCase()) {
        case 'y':
            console.log('Super!');
            break;
        case 'n':
            console.log('Sorry! :(');
            break;
        default:
            console.log('Invalid answer!');
    }
    rl.close();
});
