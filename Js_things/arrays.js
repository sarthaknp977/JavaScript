//Arrays in js can store different data types

// to create an array of size n with each value being form 1 more than the previous one starting from 1;
var nums = Array.from({ length: 10 }, (_, value) => value++);
nums.forEach(val => {
    console.log(val);
});

// let array = [0, 1, 2, 3, 4, 5];

// array[-1] = -1;
// array[-2] = 'c';
// console.log(array.indexOf('c'));  

//foreach in array:

let array = [1, 2, 3, 4, 5];

// var funct = function (val) {
//     console.log(val);
//     console.log("---------------------");
// }

// array.forEach(funct)

// array.forEach(function (val) {
//     console.log(val)
// })

// array.forEach(val => {
//     console.log(val);
// });