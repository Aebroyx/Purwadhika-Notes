// MUTABLE vs. IMMUTABLE
// MUTABLE: Non-Primitive
// Variable yang value nya bisa berubah

let arr = [1, 2, 3] // [index-0, index-1, index-2, etc]
let newArr = arr // newArr = [1, 2, 3]
newArr[0] = 'A'
console.log(arr)
console.log(newArr)

// Spread Operature ...
// Essentially copying a mutable variable like an immutable variable
let students = ['Kiki', 'Aboy', 'Immanuel']
let newStudents = [...students]
newStudents[0] = 'Defryan'
console.log(students)
console.log(newStudents)

// IMMUTABLE: Primitive
// Variable yang value tidak bisa berubah

let name = 'Raihan'
let newName = name // newName = 'Raihan'
newName = 'Kiki' // newName = 'Raihan' -> newName = 'Kiki'
console.log(name)
console.log(newName)