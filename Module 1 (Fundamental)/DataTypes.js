// DATA TYPES
// Primitive: String, Number, Null, Undefined, Boolean
// Non-Primitive: Aray & Object

// - String -> Tipe data yang ditandai dengam '', "" or ``
const campusPwd1 = 'BSD'
console.log(typeof campusPwd)
const campusPwd2 = "JKT"
const campusPwd3 = `BDG`
console.log(typeof campusPwd2)
console.log(typeof campusPwd3)

const number = '100'
console.log(typeof number)
console.log(campusPwd1 + campusPwd2 + campusPwd3)

// String Literal -> Untuk mempermudah kita dalam menyisipkan syntax di dalam string
const name = 'Defryan'
const hobby = 'Belajar'
console.log('My name is ' + name + ', My hobby is ' + hobby)
console.log(`My name is ${name}, my hobby is ${hobby}`)

// - Number
const point = 100
const num = 0.1
console.log(typeof point)
console.log(typeof num)

// - Boolean
const isGraduated = true
const isMarried = false
console.log(typeof isGraduated)
console.log(typeof isMarried)

// - Null
const angka = null

// - Undefined
let angka1
console.log(typeof angka) // null data types in javascript are seen as object
console.log(typeof angka1)

// - Date
const now = new Date()
console.log(now)
console.log(now.getDate())
console.log(now.getFullYear())