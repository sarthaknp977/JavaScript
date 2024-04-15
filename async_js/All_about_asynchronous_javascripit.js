

// sync task solves the task one at a time or line by line



// async task solves every code at a same time 
// every line code is executed at the same time and whichever is completed first will be given to the user


// there are 2 things called :
//     main stack 
//     side stack

// lets say there are 5 task a b c d e where a and b are sync tasks and c d e are async task

// the sync task will go to main stack and the aymc task will go to side stack

// at first the tasks under main stack get completed and then the tasks from side stack 

// the code in side stack will get executed but wont be displayed until the main stack is empty and the code(might or might not have been already executed) from side stack moves to main stack 

// lets suppose that in the above example the task c d and e needs 3seconds to get completed and the task a and b needs 5 seconds each to get completed 

// in this case the task in side stack gets completed before the task in the main stack however as the main stack is busy completing the task a and b, the result from the side stack is holded 
// when task a gets done task b is started although the code in side stack is completed

// so we can coclude that the tasks from main stack have higher priority 


// There isn't any order on how the tasks from side stack should be executed
//ie: No ordered is followed
// if main stack is empty and the side stack has 4 tasks a b c and d

// a takes 2s b takes 1s c takes 0.3s and d takes 3s
//if main stack is free/empty then after the completion of task c in side stack, the task doesnt wait for a and b although they are in higher position compared to task c

// so the tasks get executed in this order
// c-0.3s, b-1s ,a-2s, d-3s

//any code that needs some time is async by default in most of the cases and is sent to side stack

// we use the following to write async code:

// setTimeout - The code runs after a delay
// setInterval - The code runs after a delay but repeatedly in a particular interval
// fetch API - This will fetch API and run the code so the fetching takes time
// Axios(or other HTTP libraries) - Does everything as fetch API but is more developer friendly
// Promise - The code inside this will get executed however this promise itself goes into side stack and when the code is resolved internally, this runs

// these are used when we need to do something that needs time

// setTimeout : setTimeout(function(){},time in miliseconds)

// eg:
// setTimeout(function(){
//     console.log("Time Out");
// },3000)

// setInterval : setInterval(function(){},time in miliseconds)
// looks similar to setTimeout, The only difference is that, setTimeout runs for 1 time and setInterval runs infinitely

//eg:
// setInterval(function(){
//     console.log("Interval");
// },2000)


//This is what we can do to stop the setInterval function after certain time or after certain condition isn fulfilled
// let count=0;

// const stopInterval = setInterval(function(){
//     console.log("Interval");
//     count++;
//     if(count===2) clearInterval(stopInterval);
// },200)


// as fetch has to bring some data from another website we dont know if it will return immediately or take a lot of time, so this is considered async task by js
// if fetch was synchronous task then this might lead to the other task not being executed as the top task of the main stack hasn't been complete

// fetch('url');

// fetch('https://catfact.ninja/fact')
// .then(raw=>raw.json())
// .then(res=> console.log(res.fact))

// As mentioned above axios is similar to fetch, it more developer friendly in a sense that we dont have to convert the raw data into json file
// We must include the cdn in order to use axios

// axios.get('url')
// .then(result=>console.log(result))

// axios.get('https://catfact.ninja/fact')
// .then(result=>console.log(result))





// promises : think of some async code (ie it will go to side stack for now and will run later, this means that the code might or might not return anything depending on some scenerios)

// anytime you write something(async code) inside this promise, the promise will grant you something, that something can have 3 values :
// Completed, Waiting, Resolved 

// and there are mainly 2 events that can occur after using promise. They are:
//then and catch

//by default this value is set as waiting,
//if the promise returns with the value then it changes to resolved 
//else if the promise doesn't return with with a desired/wrong data, the value changes to rejected

// const wait = new Promise(function (resolve, reject) {
//     fetch('https://catfact.ninja/fact')
//         .then(raw => raw.json())
//         .then(result => {
//             if (result.fact.includes("cat")) {
//                 resolve();
//             }
//             else {
//                 reject();
//             }
//         })
// });

/*
wait
    .then(function () {         // runs only when promise hold resolve
        console.log("done")
    })

    .catch(function () {            // runs only when promise hold reject
        console.log("not done")
    })
    */

// console.log(wait);//if printed outside this will return pending as this is on the main stack and the wait(promise) is on side stack



// callback: Nothing but a funcion, The unique / special part is that, it is passed as an argument to some async function,when some sync code run then only you can use that that callback function

// How to use callback function?
// -its basically a function so like every other function we write something that we want to execute, and we run this code when our async code is already executed


// function Callbacks(url, callback) {
//     fetch(url)
//         .then(raw => raw.json())
//         .then(result => {
//             callback(result);
//         })
// }

// Callbacks('https://official-joke-api.appspot.com/random_joke', function (result) {
//     console.log(result.setup)
//     console.log(result.punchline)
// });


// Async / Await : Function is necessary everytime while using async/await

// make any function and write any code that you want, when using async the lines after the async line run before as the async code goes to side stack, if the line after async is dependend upon async then we will get an error as there is no any value receivede from async code
//eg :
// a = fetch('https://official-joke-api.appspot.com/random_joke');
// console.log(a); //This will give pending as there no value returned to a as fetching isnt completed while this line is executed

// however using await we can fix this problem, as await will ask the line to wait until the code is completed
// but to use await, we have to use async in the parent function ie. await is only valid in async functions and the top level bodies of modules



// with async await, we can write async code as if it was a regular synchronous code
// (async () => {
//     const response = await fetch('https://official-joke-api.appspot.com/random_joke');
//     const joke = await response.json()
//     console.log(joke.setup);
// })();



// callbacks vs promises vs async/await


// Using Callback
// function usingcallback(url, callback) {
//     fetch(url)
//         .then(raw => raw.json())
//         .then(result => {
//             callback(result);
//         })
// }
// testcallback('https://official-joke-api.appspot.com/random_joke', function (result) {
//     console.log(result.setup);
// })

// Using Promises
// const promises = new Promise(function (resolve, reject) {
//     fetch('https://official-joke-api.appspot.com/random_joke')
//         .then(raw => raw.json())
//         .then(result => resolve(result))
// })

// promises
//     .then(function (result) {
//         console.log(result.setup);
//     })

//     .catch(function () {
//         console.log("Error!!!");
//     })


// Using await/async

// async function usingawait() {
//     const joke = await fetch('https://official-joke-api.appspot.com/random_joke')
//     const mainJoke = await joke.json();
//     console.log(mainJoke.setup);
// }

// usingawait();

//                                OR

// async function usingawait() {
//     const joke = await fetch('https://official-joke-api.appspot.com/random_joke')
//     const mainJoke = await joke.json();
//     return mainJoke;
// }

// async function sayJoke() {
//     const mainJoke = await usingawait();
//     console.log(mainJoke.setup);
// }

// sayJoke();


// Event Loop

// As there are 2 working area to run js code ie main stack and side stack

// the tasks from side stack have to wait until the main stack is empty, this checking is done by something called event loop
// This event loop continiously checks either the main stack is empty or not and then sends the tasks from side stack to main stack one at a time 


//Generators

// They are used to pause at a certain line until we say next or to pause the flow of execution

// Normal function
// function Loop() {
//     for (let a = 0; a < 10; a++) {
//         console.log(a + 1);
//     }
// }


// function with Generators(uses * like pointers)

// function* Loop() {
//     let x = 0;
//     for (let a = 1; a < 11; a++) {
//         if (a % 2 == 0) {
//             yield x;
//             x++
//         }
//     }
// }


// function* Loop2() {

//     for (let a = 1; a < 11; a++)    yield a;
// }
// const ans = Loop();
// const ans2 = Loop2();
/*
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value); //undefined
console.log(ans.next().value); //undefined
console.log(ans.next().value); //undefined
console.log(ans.next().value); //undefined
console.log(ans.next().value); //undefined
*/


//all defined


// console.log(ans2.next().value);
// console.log(ans2.next().value);
// console.log(ans2.next().value);
// console.log(ans2.next().value);
// console.log(ans2.next().value);
// console.log(ans2.next().value);
// console.log(ans2.next().value);
// console.log(ans2.next().value);
// console.log(ans2.next().value);
//                              OR
// for (let i = 0; i < 12; i++) {
//     console.log(ans2.next().value);
// }

// for prime Numbers using generators

// function isPrime(i) {
//     for (let index = 2; index < i; index++) {
//         if (i % index == 0) return false;
//     }
//     return true;
// }
// function* generatorsPrime() {
//     for (let i = 1; i < 100; i++) {
//         if (isPrime(i)) {
//             yield i;
//         }
//     }
// }

// const totalcount = generatorsPrime();
// for(let i=1;i<27;i++){
//     console.log(totalcount.next().value);
// }


//Web Workers
// sometimes there a huge task to be perfomed, this can sometime cause too much load in the thread, due to this reason we can create another js file, take the data from main file to that newly created file, perform the task there parallely to make it fast and effective just like multi threading

// this feature allows us to run scripts in background threads
//  example:
var nums = Array.from({ length: 1000 }, (_, value) => value + 1);

const worker = new Worker('/async_js/worker.js');
worker.postMessage(nums);

worker.onmessage = function (sum) {
    console.log(sum.data)
}