// Object
// Key & Value -> Property
const user = {
    username : 'kikiprima' // username disebut key, 'kikiprima' disebut value
}
const student = new Object()

const productNameArr = ['Anggur','Jeruk']
const productPriceArr = [10000,15000]
const products1 = {
    name : 'Anggur',
    price : 10000
}
const products2 = {
    name : 'Jeruk',
    price : 15000
}

// CRUD (Creat,Read,Update & Delete)
// Create
const campusPwd = {}
campusPwd.location = 'BSD'
campusPwd.building = 'GPO-09'
console.log(campusPwd)

const programPwd = new Object()
programPwd.name = 'Web Development'
programPwd.totalStudents = 9
console.log(programPwd)

// Read
console.log(campusPwd.building)
console.log(programPwd.totalStudents)
console.log(campusPwd['location'])

// Update
const newData = {
    name: 'Defryan', 
    hobby: 'Programming'
}

newData.hobby = 'Futsal'
console.log(newData)

// Delete
newData.hobby = ''
console.log(newData)

delete newData.hobby
console.log(newData)

// Method
// Function yang dimasukan ke dalam object
const myObj = {
    greeting: () => {
        console.log('Welcome, 2602')
    }
    //,
    //greeting1: function() {
    //    console.log('Hello')
    //}
}

myObj.greeting()

// Accessing Key & For in Loop Object
const studentData = {
    name: 'Immanuel',
    address: 'BSD',
    program: 'WD'
}
console.log(Object.keys(studentData))

for (let key in studentData) {
    console.log(key)
    console.log(studentData[key])
}
/*
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/

// Destructuring Assignment
// Destruct dari property object menjadi variable
const data = {
    name: 'Raihan',
    hobby: 'Study'
}

const {name, hobby} = data
console.log(name)
console.log(hobby)