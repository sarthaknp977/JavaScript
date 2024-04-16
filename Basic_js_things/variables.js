/*Number One:

console.table([a,b,c,d])
this will print the data in tabular form


command
console.table([1,2,3,4,5])

 output :
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 1      │
│ 1       │ 2      │
│ 2       │ 3      │
│ 3       │ 4      │
│ 4       │ 5      │
└─────────┴────────┘
*/

/*
Number two:
variableName=value

yes this will work fine even tho there's no variable type specified
However dont use it 
*/



let variable1 = 5;
let variable2 = 8;
var variable3 = '3';
let variable4 = "3a";

// We can use Number(variableName) to convert the numerical data which are in string form from string to number  
//In the above example, variable1 and variable2 are numbers, so dont have to convert it

//This will print string
console.log(typeof variable3);

// However, variable3 is a string, and its content consists solely of numeric characters. Therefore, we can convert it to a number using the following line:


variable3 = Number(variable3);


//This will now print number
console.log(typeof variable3);


//Now if we try to do the same thing to variable4, we will see that the type after conversion is a "number". However the value of variable4 becomes NaN which means Not a Number, however js considers NaN to be a Number 
//So, instead of value being NaN, the typeof variable4 returns number not because variable4 is a number but due to NaN having the type of number

variable4 = Number(variable4);
console.log(typeof variable4);


//Same thing happens to pure string values as well

let languageName = "JavaScript";

languageName = Number(languageName);
console.log(typeof languageName);


//lets check the value of every variables now

//According to my understanding, it must be as following:
// variable1:number (No change)
// variable2: number (No change)
// variable3: number (changed as it had only number even tho it was declared a string)
// variable4:NaN  (changed to number, but as it had string and number mixed together, its now NaN )
// languageName:NaN (It is NaN because it had no numbers ;only string )

console.log(variable1)

console.log(variable2)

console.log(variable3)

console.log(variable4)

console.log(languageName)