// FUNCTION
// Tempat untuk menyimpan baris code

// - Function Declaration

/*
    function functionName() {
        block of code
    }
*/
// 1. Build
function showConsole() {
    console.log('Hello, World!')
}

// 2. Call
showConsole() // Output: Hello, World!

// - Function Expression: Function yang dimasukan kedalam variable
const showConsole2 = function() {
    console.log('Function Expression')
}

showConsole2() // Output: Function Expression

// The difference between function declaration and function expression is that in function expression
// you cannot call the function without building it first, while function declaration you can call
// first and write the function build can be made later down the line
// The term is Hoisting -->
Penjumlahan() // Output: 37
Penjumlahan() // Output: 37

function Penjumlahan() {
    console.log(12+25)
}

// - Arrow Function (also not able to hoisting)
const Perkalian = () => {
    const num1 = 5
    const num2 = 10

    console.log(num1 * num2)
}

Perkalian()

// Function with parameter
const Pembagian = (num1, num2) => { // num1 and num2 is the parameter
    console.log(num1 / num2)
}

Pembagian(10, 5) // Output: 2, 10 and 5 is the argument

function Pengurangan(num1, num2) {
    console.log(num1 - num2)
}

Pengurangan(25, 12) // Output: 13

// Function with return
const Penjumlahan1 = (num1, num2) => {
    return num1 + num2
}

Penjumlahan1(3, 3) //no output in terminal because no console.log, however Penjumlahan(3, 3) has a return value of 6
console.log(Penjumlahan1(3, 3))

// Function with rest parameters
const showNumber = (...manyMore) => {
    return manyMore
}

console.log(showNumber(1, 2, 3, 4, 5, 6, 7, 8))

// Function with default parameter
const welcomingName = (name = 'User') => {
    return `Welcome, ${name}!`
}

console.log(welcomingName())
console.log(welcomingName('Aboy'))

// Recursive Function
const countDown = (num) => {
    num--
    console.log(num)
    if (num > 0) {
        return countDown(num)
    }
}

console.log(countDown(10))

// Closure Function -> inner function yang dapat mengakses variable dari outer function
const Greeting = () => {
    const name = 'Defryan'

    const showGreeting = () => {
        console.log(`Welcome, ${name}`) // Variable name is able to be used from outside scope
    }
}