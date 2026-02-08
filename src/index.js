import { Car } from "../utilities/Car.js";
import { addLogs, mulExponents } from "../utilities/Math.js";
import { sumArr,addConst,extractFromArr } from "../utilities/Array.js";


const Arr1 = [5,4,3,6,9,2,1];
const Arr2 = [1,2,3,4,5,6,7,8,9];
const Arr3 = [1,5,7,8,9];

const addedValue = 1;

let A = 15;
let B = 60;
let base = 2;

let N1 = 3;
let N2 = 4;

let  x = new Car(3,2,1,1.5);

console.log('============================================================');
console.log('X car stats:\n');
console.log('Length: ' + x.length + ' Meters.');
console.log('Width: ' + x.width + ' Meters.');
console.log('Height: ' + x.height + ' Meters.');
console.log('Weight: ' + x.weight + ' tons.');
console.log('Volume: ' + x.calcVolume() + ' Meters cubic.');
console.log('============================================================\n');
console.log('Exponent multiplication on A and B: ' + mulExponents(A,B,N1,N2));
console.log('Logarithmic addition on A and B: ' + addLogs(A,B,base));
console.log('============================================================\n');
console.log('Add constant value to all elements of array 1: ' +addConst(addedValue,Arr1));
console.log('Extract value of array 2: ' + extractFromArr(5,Arr2));
console.log('Sum elements of array 3: ' + sumArr(Arr3));
console.log('============================================================\n');
console.log('End, exiting program');

