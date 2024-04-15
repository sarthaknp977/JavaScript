

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

const wait = new Promise(function (resolve, reject) {
    fetch('https://catfact.ninja/fact')
        .then(raw => raw.json())
        .then(result => {
            if (result.fact.includes("cat")) {
                resolve();
            }
            else {
                reject();
            }
        })
});


wait
    .then(function () {         // runs only when promise hold resolve
        console.log("done")
    })

    .catch(function () {            // runs only when promise hold reject
        console.log("not done")
    })

// console.log(wait);//if printed outside this will return pending as this is on the main stack and the wait(promise) is on side stack