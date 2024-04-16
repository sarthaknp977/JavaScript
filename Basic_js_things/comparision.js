//Only compare values with same data types for expected result


// comparision takes place on the basis of given condition The condition can either be true or false 

// The value being either true or false depends on the basic of "truthy" and "falsy"

// here are the elements that can be considerd falsy:
// 0 null NaN undefined document.all  "" '' false
// everything except these are considered truthy:
// "saldhdsi" 1 2 3 4 ... n -1 -2 -3 ...-n      anything 


//All of these are true

// console.log(2=='2');
// console.log('a'=="a");
// console.log("3"== Number("3"));
// console.log('2'==="2");
// console.log(2===Number("2"));
// console.log(2===Number('2'));

//These are false

// console.log('2'===2);
// console.log('sa'=='rt');
 
// Some confusing comparisions

// console.log(null>0);
// console.log(null<0)
// console.log(null==0)
// console.log(null>=0)
// console.log(null<=0)

// console.log(false);

// console.log('false'==false);
// console.log(false>='false')
// console.log(true>='true')
// console.log('true'==true)

// console.log(1==true)
// console.log(2==true)

// if(2){
//     console.log(2);
// }

// if(-1){
//     console.log(-1);

// }

// if('abc'){
//     console.log("abc");
// }


// if(0){
//     console.log(0);
// }

// if('0'){
//     console.log(0);
// }

// if(Number('0')){
//     console.log(0);
// }

// if(null){
//     conosole.log('null');
// }


// if(undefined){
//     console.log('undefined');
// }
