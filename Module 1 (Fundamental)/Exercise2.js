// ● Write a code to convert celsius to fahrenheit
// ○ Example: 60 Celcius → 140 Fahrenheit
let celsius = 60
let fahrenheit = (celsius * 1.8) + 32

console.log(`${celsius} Celsius is ${fahrenheit} fahrenheit`)

// ● Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number
let number = 25

if (number % 2 == 0) {
    console.log(`${number} -> even number`)
} else if (number % 2 == 1){
    console.log(`${number} -> odd number`)
}

// ● Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number
let num1 = 7
let isPrime = false

if (num1 == 0 || num1 == 1) {
    isPrime = false
}
for (let i = 2; i <= num1/2; i++) {
    if (num1 % i == 0) {
        isPrime = false
    } else {
        isPrime = true
    }
}

if (isPrime == true) {
    console.log(`${num1} is a prime number`)
} else {
    console.log(`${num1} is not a prime number`)
}

// ● Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6
let num2 = 1
let N = 3
let result = 0

for (let i = 1; i <= N; i++) {
    result = result + i
}
console.log(result)


// ● Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 4 x 3 x 2 x 1 = 720

let num3 = 4
let factorialOfNum = 1

if (num3 == 0) {
    factorialOfNum = 1
} else {
    for (let i = 1; i <= num3; i++) {
        factorialOfNum = factorialOfNum * i
    }
}

console.log(factorialOfNum)


// ● Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610
let N2 = 15
let firstFibonacci = 0
let secondFibonacci = 1
let nextFibonacci = 0

for (i = 1; i < N2; i++) {
    console.log(firstFibonacci)
    nextFibonacci = firstFibonacci + secondFibonacci
    firstFibonacci = secondFibonacci
    secondFibonacci = nextFibonacci
}

console.log(nextFibonacci)

// Carilah angka bernilai genap yang ada di dalam string

const stringNumber = '35912'
let isEven = false

    for (let i = 0; i < stringNumber.length; i++) {
        if (stringNumber[i] % 2 == 0) {
            isEven = true; 
        }
        console.log(stringNumber[i])
    }
    
    if (isEven == false) {
        console.log('There is no even number')
    } else if (isEven == true) {
        console.log('There is an even number')
    }

// count even number in string

const stringNumber2 = '12345'
let count = 0

    for (let i = 0; i < stringNumber2.length; i++) {
        if (stringNumber2[i] % 2 == 0) {
            count++
        }
        console.log(stringNumber2[i])
    }

    console.log(`There is: ${count} amount of even number`)

// Buatlah program unbtuk menentukan jumlah bilangan gangil dan bilangan genap
const stringNum3 = '33124'
let totalEven = 0
let totalOdd = 0

for (let i = 0; i < stringNum3.length; i++) {
    if (stringNum3[i] % 2 == 0) {
        totalEven++
    } else if (stringNum3[i] % 2 == 1){
        totalOdd++
    }
    console.log(stringNum3[i])
}

console.log('Total Even = ' + totalEven)
console.log('Total Odd = ' + totalOdd)

// Palindrome
// Susunan karakter kata yang dibalik akan membentuk kata aslinya

let kata = 'malam'
let kataBaru = ''

for (i = kata.length-1; i >= 0; i--) {
    kataBaru = kataBaru + kata[i]
    console.log(kataBaru)
}

if (kata == kataBaru) {
    console.log(kata + " is a Palindrome")
} else {
    console.log(kata + " is not a Palindrome")
}