// COMPARISON OPERATOR
// >, >=, <, <=, ==, ===, !=, !==
// Akan menghasilkan value berupa nilai boolean (true/false)

console.log(10 > 5)
console.log(10 > 10)
console.log(5 <= 5)
console.log(10 != 10)
console.log(5 !== 3)

// == / != -> hanya mengecek valuenya saja
// === / !== -> mengecek value dan juga tipe datanya

console.log(5 == '5') // output: true
console.log(3 === '3') // output: false

// Increment & Decrement
let number = 3
number = number + 1
console.log(number)
number++
console.log(number)

let point = 5
point++
console.log(point)

let value = 100
value + 1 //just an operation but does change the value of value because no equal to
value++
console.log(value) //output: 101

let nilai = 100
nilai += 1
console.log(nilai)

let discount = 10
discount *= 2
console.log(discount)

// String Special Concate
let name1 = 'Defry'
let name2 = 'Isfandy'
console.log(name1 + name2)
console.log(name1 - name2) // Not a Number

let name3 = 'Raihan'
let points = 100
console.log(name3 + points) // Apabila string + number --> concate and value becomes a string

let num1 = 100
num1++
num1 += '2'
console.log(num1) //output: 1012 (as string)

let num2 = '10'
num2++ // becomes a number 10 + 1 = 11
num2 += '1' // concate
console.log(num2) // output: 111 (as string)

let num3 = '100'
num3 *= 3 // 300 as a number, all operator except + will turn the string into a number or NaN if string contains character
num3 += 5
console.log(num3) // output: 305

let num4 = '63'
num4 -= 1
console.log(num4) // output: 62

