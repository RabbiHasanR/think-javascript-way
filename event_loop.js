// Event Loop : The event loop is the secret behind JavaScript's asynchronous 
// programming. JS executes all operations on a single thread, but using a 
// few smart data structures, it gives us the illusion of multi-threading.

// Easy Definition : 
// The Event Loop has one simple job — to monitor the Call Stack and the 
// Callback Queue or Message Queue. 

// If the Call Stack is empty, it will take the first event from the
// Callback queue and will push it to the Call Stack, which effectively runs it. 

// Such an iteration is called a tick in the Event Loop. 
// Each event is just a function callback.

// Easiest explanation : 
// When any Asynchronous event occur such as setTimeOut or promises... 
// Then these task takes some time to complete I/O if they have any. 
// If they completed their I/O or don't have any, then they simply put into 
// message queue or callback queue. Then event loop will firstly execute the 
// call stack tasks and then look for callback or message queue and then execute it..



// * JavaScript is single threaded. so it needs event loop to run asynchronous (Multi Thread) code.
// * JavaScript first runs synchronous code, then it queue asynchronous code to call later.
// * Asynchronous code is called/executed by event loop.
// * System/Browser takes synchronous code and put them as tasks. then these tasks are put them into queue.
// * The Event Loop has one simple job — to monitor the is there any task to handle.
// * System/Browser push the task to call stack.
// * Then the event loop will check the call stack and execute the task.
// * Then it waits for the next task to be pushed to the call stack.



// event loop example


const second = () => console.log('Second');
const third = () => console.log('Third');

const first = () => {
    console.log('First')
    setTimeout(third, 0);
    new Promise((resolve, reject) => {
        resolve('I am right after third, before second');
    }).then(resolve => console.log(resolve));
    third();
}

first();

// outpur above code is:
// First
// Third
// I am right after third, before second
// second

// above code output is like that because after es6 promise execute before settimeout


// heap->js engine call stack ->webapi->callback queue, microstack queue -> event loop -> js engine call stack