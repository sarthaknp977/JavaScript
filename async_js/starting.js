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



