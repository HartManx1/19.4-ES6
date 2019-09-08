//1

const string1 = 'Hello';
const string2 = 'World!';

const sayHello =`${string1} ${string2}`
console.log(`${sayHello}`)

//2

let multiply = (x, y = 1) => (x * y);
console.log(multiply(2));

//3

const average = (...data) => data.reduce((a, b) => a + b) / data.length;
console.log(average(1, 5, 12, 18));

//4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//5

const data = [1, 4, 'Iwona', false, 'Nowak']
const [, , firstname, , lastname] = data;

console.log(`${firstname} ${lastname}`);