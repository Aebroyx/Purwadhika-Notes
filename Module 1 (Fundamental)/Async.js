// setTimeout
// it waits 3 seconds (3000ms) to execute
function callback() {
    console.log('finish')
}

setTimeout(callback, 3000)

// u can also create a function inside setTimeout
setTimeout(function callback1(){
    console.log('finish')
}, 3000)

// This is an example of asynchronous
console.log('first')
setTimeout(function callback2() {
    console.log('second')
},3000)
console.log('third')
// first third second

// setTimeout accepts a function as a parameter (callback) hence u dont need to name the function inside
console.log('task1')
setTimeout(() => {
    console.log('task2')
},0)
console.log('task3')
// task1 task3 task2 (even if the param is 0ms, js will always finish the code synchronously then asynchronously)
