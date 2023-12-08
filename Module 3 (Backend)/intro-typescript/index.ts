// + V A R I A B L E
let myName: string = 'Sangalabror'
console.log(myName)

const myAge: number = 23

let input: number | string | boolean
// let input: any //this will act the variable like any js variable where it can hold any type of variables
input = 100
input = 'hello'
input = false

// Array Biasa
// ['Apple', 'Orange', 'Mango']
let products: string[]
products = ['Apple', 'Orange', 'Mango']

// Array Tupple
// ['Apple', 15000, true]
let dataProducts: [string, number, boolean]
dataProducts = ['Jeruk', 15000, true]

// Object
let myObj: {
    name: string,
    age: number,
    isMarried: boolean
}

myObj = {
    name: 'Immanuel',
    age: 18,
    isMarried: false
}

type programPwdType = {
    name: string,
    batch: number,
    campus: string
}

let programPwd: programPwdType = {
    name: 'Web Dev',
    batch: 2602,
    campus: 'BSD'
}

// + F U N C T I O N
// Function without return
function Hello(): void{
    console.log('Hello, JCWD')
}

Hello()

// Function with return
function Result(): string{
    return 'Hello, JCWD!'
}

const ResultNew = (): string => {
    console.log('Bebas')
    return 'Hello, JCWD!'
}
console.log(Result())

// Function with param
const MyFunction = (x: number, y: number): number => {
    return x * y
}
console.log(MyFunction(100, 10))

// + TYPE & INTERFACE
// Type: Untuk Pendeklarasian Tipe Data
// Interface: Untuk Pendeklarasian Struktur Object
type Program = 'JCWD' | 'JCDM' | 'JCUI/UX' | 'JCDS'

interface IStudents{
    name: string,
    address: string,
    program: Program
}

let students: IStudents

students = {
    name: 'Defryan',
    address: 'Bogor',
    program: 'JCWD'
}