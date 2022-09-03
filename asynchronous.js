// Javascript is a single threaded language. at a time javascript only do one thing synchonously
// that's why javascript is a single threaded language. and in javscript its called synchronous blocking behaviour


// synchronous js example

// function processorder(customer) {
//     console.log('Processing customer order!')
//     let start_time = new Date().getTime()
//     while(start_time + 3000 >= new Date().getTime());
//     console.log('Processed customer order!')
// }

// console.log('take order from customer 1');
// processorder();
// console.log('complete order for cutomer 1');


// how to run above code in browser

// call stack
// then processorder() ar vitore console.log('Processing customer order!') stack a add hoy and console a print kore
// then processorder() call stack a add hoy 
// then console.log('take order from customer 1') add hoy call stack a and output console a print kore and pop hoye jay
// .js file execution ar surute first main() function add hoy call stack a 


// asynchronous example

// var processOrder = (customer) => {
//     console.log('Processing order for customer 1')
//     setTimeout(()=>{
//         console.log('cooking completed!')
//     }, 3000);
//     console.log('Processed order for customer 1!')
// }

// console.log('take order from customer 1!')
// processOrder()
// console.log('completed order for customer 1')

// how to run avobe code asynchronously in browser

// call stack
// when main () pop out from stack then queue theke console.log('cooking completed!') stack a add hoy through event loop and show output and pop out from stack
// then main() execution complete hoar pore pop out hoye jay stack theke
// then console.log('completed order for customer 1') add hoy call stack a and output console a print kore and pop hoye jay
// then processOrder() execution completed and pop out from  stack
// then console.log('Processed order for customer 1!') add hoy call stack a and output console a print kore and pop hoye jay
// then when asynchronous code execution start tokhon asynchronous code web api a chole jay
// four console.log('Processing order for customer 1') add hoy call stack a and output console a print kore and pop hoye jay
// third processOrder() stack a add hoy
// second console.log('take order from customer 1!') add hoy call stack a and output console a print kore and pop hoye jay
// first execute main()


// event loop
// when main () pop out from stack then queue theke console.log('cooking completed!') stack a add hoy

// callback queue
// after asynchronous code execution completed then output store in queue console.log('cooking completed!')

// web api
// setTiemout() asynchronous code



// callbackes and asynchronous example

// function takeOrder(customer, callback) {
//     console.log(`Take order form ${customer}`);
//     callback(customer);
// }

// function process(customer, callback) {
//     console.log(`Processing order for ${customer}`);
//     setTimeout(()=>{
//         console.log('cooking complete!');
//         console.log(`order processed for ${customer}`);
//         callback(customer)
//     }, 3000)
// }

// function complete(customer) {
//     console.log(`complete order for ${customer}`);
// }

// takeOrder('customer 1', (customer)=>{
//     process(customer, ()=>{
//         complete(customer);
//     });
// });




// js promise and promise chaining example
const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Interview',
            location: 'Google',
            time: '10:10 PM'
        }

        resolve(meetingDetails);
    } else {
        reject(new Error('Meeting already schedule!'))
    }
});

const addToCalender = (meetingDetails) => {
    const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calender)
}

meeting
    .then(addToCalender)
    .then((result) => {
        console.log(JSON.stringify(result));
    })
    .catch((err) => {
        console.log(err.message);
    })