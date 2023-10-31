// METHOD

//1. String Build-in Method
// .length -> untuk menghitung jumlah karakter
const paragraph = 'abcdefghijklmnopq'
console.log(paragraph.length)

// .slice -> untuk memotong
const text = 'Hello, world!'
const nom = 'immanuel'
console.log(text.slice(0, 5)) // output: Hello
console.log(text.slice(5,2)) // output: [empty string]
console.log(nom.slice(nom.length-4, nom.length))

// .substring 
const nama = '12345678'
console.log(nama.substring(0, 2)) // output: 12
console.log(nama.substring(5,2)) // output: 345 (as if its parameter (2, 5) it switches)

// .toUpperCase & .toLowerCase
const fullname = 'Defryan'
console.log(fullname.toUpperCase()) // ALL UPPERCASE
console.log(fullname.toLowerCase()) // ALL LOWERCASE

// 2. Number Built-in Method
// .toString - convert number to string

const phoneNumber = 12345678
console.log(phoneNumber.toString().slice(0, 5)) // output: 12345

// - Math Round -> pembulatan sesuai aturan matematika
console.log(Math.round(1.4)) // output: 1
console.log(Math.round(1.5)) // output: 2
// - Math Ceil -> pembulatan keatas
console.log(Math.ceil(1.3)) // output: 2
// - Floor Floor -> pembuatan kebawah
console.log(Math.floor(1.8)) // output 1