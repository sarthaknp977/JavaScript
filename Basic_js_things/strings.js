//  use `` to print in js [string interpolation]
var variable='sarthak'
console.log(`hello  my name is ${variable}`);



const nam = 'sarthak';
//or 
const naam = new String('sarthak');

// for (let a = 0; a < nam.length; a++) {
//     console.log(nam[a]);
// }

// .slice()

console.log(variable.slice(-4,7)) //thak
console.log(variable.slice(1,4)) //art
console.log(variable.slice(1,-2)) //arth
//-7 -6 -5 -4 -3 -2 -1  only for slice
// s  a  r  t  h  a  k
// 0  1  2  3  4  5  6 

console.log(variable[-1]); //This doesnt work the same way it did on slice
//negative indexing also doesn't work on substring()

let name = 'abcdeabcde';
console.log(name.indexOf('a')); //return the index of first character ie 0 in this case


// charAt,indexOf,touppercase,etc

//string comparision happens according to the unicode value, so it becomes just like comparing the position of elements in dictonary,
//ie:a comes before b so a has lower index, aaaaaaaaaaa also comes before b so aaaaaaaaaaa inspite of having more charcters than b is lower

const a = "aaaaaaaaaaa";
const b = "b";
if (a < b) {
    console.log(`${a} is less than ${b}`);
} else if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} and ${b} are equal.`);
}

// eval is used to take a string argument that contains a JavaScript expression, statement, or sequence of statements, and then it executes that code
// eg:
// when const a = '2+3' is '2+3'
// eval(a) is 5

// if const a = new String('2+3')
// eval(a) = '2+3'

const str = '2+4';
const objstr = new String('2+5');

console.log(eval(str));
console.log(eval(objstr));