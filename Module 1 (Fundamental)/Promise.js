// Promise is a class with contructor parameter of a callback function thats holds another callback function called resolve and reject

const tryPromise = new Promise((resolve, reject) => {
    let isError = false
    if(isError) { // if true
        reject("Error 404")
    } else {
        resolve("Success")
    }
})

// .then has param of a callback function with a variable that holds the return value of resolve() res = response
// .catch has a param of callback function with a variable that holds the return value of reject() err = error
// .finally has a param of callback function
tryPromise.then((res) => {
    console.log(res) // Success
})
.catch((err) => {
    console.log(err)
})
.finally(() => {
    console.log("Finally") // Finally
})

// Real life application of Promise would usually when frontend needs to fetch data from backend (server)
function fetchData() {
    // fetch is a promise class built in js to fetch data from server
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
        //json is a promise class built in js to convert the paramater value into json
        return res.json()
    })
    // thats why theres is 2 .then because fetch returns another promise called json
    .then((users) => {
        console.log(users)
    })
    // only 1 catch because if any of the promises are not fulfilled (no matter how many .then) they will always go to the last .catch
    .catch((err) => {
        console.log(err)
    })
}

// Async Await is a function that returns a promise and it make an asynchronous code into synchronous
// use async before declaring/using function
const asyncAwait = async () => {
    console.log('satu')
    // use await to start where the task will be held to be waited for it to be done before the next task can be done (seems like synchronous but it isnt)
    await tryPromise.then((res) => {
        console.log(res) // Success
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log("Finally") // Finally
    })
    console.log('dua')
}
// satu error 500 finally dua

// Error Handling (try catch)
const tryCatch = async () => {
    try {
        // result will hold a value from the return value of resolve() of the promise
        let result = await tryPromise
        console.log(result)
    // the catch can be for any promises above and will return the value of err from the return reject() from the promise
    } catch(err) {
        console.log(err)
    }
}