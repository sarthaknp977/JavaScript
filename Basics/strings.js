//  use `` to print in js
// const nam = 'sarthak';

// for (let a = 0; a < nam.length; a++) {
//     console.log(nam[a]);
// }



// let name = 'abcdeabcde';
// console.log(name.indexOf('a'));

// charAt,indexOf,touppercase,etc

//string comparision happens according to the unicode value, so it becomes just like comparing the position of elements in dictonary,
//ie:a comes before b so a has lower index, aaaaaaaaaaa also comes before b so aaaaaaaaaaa inspite of having more charcters than b is lower

// const a = "aaaaaaaaaaa";
// const b = "b";
// if (a < b) {
//     console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//     console.log(`${a} is greater than ${b}`);
// } else {
//     console.log(`${a} and ${b} are equal.`);
// }

// eval is used to take a string argument that contains a JavaScript expression, statement, or sequence of statements, and then it executes that code
// eg:
// when const a = '2+3' is '2+3'
// eval(a) is 5

// if const a = new String('2+3')
// eval(a) = '23'

const str = '2+4';
const objstr = new String('2+5');

console.log(eval(str));
console.log(eval(objstr));