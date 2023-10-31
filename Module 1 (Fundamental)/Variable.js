console.log('Hello, World!');
console.log("Hello, World!");

// Statement and Expression
// Statement -> Syntax yang tidak menghasilkan apapun
// Expression -> Syntax yang menghasilkan sesuatu
console.log(2+2); // Statement and Expression
console.log(1+1); // Create Comment CMD + ? or CMD + /

/*
    This is a multiline comment!
*/

// Variables
// Tempat untuk menyimpan data
var word1 = "World!";
var word2 = "JCWD!";
var world = "Hello, World";

console.log(world);

// - Variable Rules:
// 1. Namingnya harus jelas
var streetName = 'Soekarno'
// 2. First character must be alphabest or special character (_, $)
var studentName
var _campus
var $program
// 3. Cant be the same with js syntax
// 4. Use _ or camelCase (ex. studentName, student_name)
// 5. Case sensitive
var studentName = "Aboy"
var studentname = "Nuel"
console.log(studentName);


// - Variable Declaration: const & let
// var:
// Memungkinkan membuat variable dengan nama yang sama
var animal = 'Jerapah'
var animal = 'Gajah'
console.log(animal)
// Valuenya masih bisa diubah
var studentName = 'Raihan'
studentName = 'Bulan'
console.log(studentName)
// Tidak memeiliki aturan scope

// let:
// Tidak diperbolehkan membuat variable dengan nama yang sama
let campusPwd = 'BSD'
let campusPwd2 = 'JKT' // if same will be error
// Valuenya masih bisa diubah
let number = 10
number = 20
console.log(number)
// Memiliki aturan scope


// const:
// Tidak diperbolehkan membuat variable dengan yang sama
const point = 10
const point2 = 20 // if same will be error
// Valuenya tidak bisa diubah
const color = 'Red'
//color = 'Blue' Assignment to constant variable will result with error
// Memiliki aturan scope