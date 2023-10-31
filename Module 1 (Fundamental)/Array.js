// ARRAY
// Tipe data yang dapat menampung tipe data lainnya

// [..., ..., ...]
// [index ke-0, index ke-1, index ke-2, dst.]

const student1 = 'Raihan'
const student2 = 'Feri'
const student3 = 'Aboy'

const students = ['Raihan', 'Feri', 'Aboy']
const data = ['Abc', 123, true, false, null, undefined]

// Create Read Update Delete (CRUD)
// Create
const campusPwd = ['BSD', 'JKT', 'BDG']

// Read
console.log(campusPwd[0])
console.log(campusPwd[2])
console.log(campusPwd)

// Update
let name = 'Ryan'
name = 'Defryan'

const studentsName = ['Kiki', 'Bulan', 'Rahma']
studentsName[0] = 'Defryan'
console.log(studentsName[0])
studentsName[2] = 'Aboy'
console.log(studentsName)
studentsName[3] = 'Karta'
console.log(studentsName)

// Delete
delete studentsName[0]
console.log(studentsName)

// Method
// - Push: Menambahkan data di index paling akhir
const arrNumbers = [1,2,3]
arrNumbers.push(4)
console.log(arrNumbers)

// - Unshift: Menambahkan data di index paling awal
const alphabets = ['a', 'b', 'c']
alphabets.unshift('d', 'e')
console.log(alphabets)

// - Pop: Menghapus data di index paling akhir
const campusPwdNew = ['BSD', 'JKT']
campusPwdNew.pop()
console.log(campusPwdNew)


// - Shift: Menghapus data di index paling awal
const arrRandom = [1, true, 'Abc']
arrRandom.shift()
console.log(arrRandom)

// - Splice: Bisa digunakan untuk menghapus atau menambah atau mengupdate data
// variableName.Spice(index, items to delete, items)

const programming = ['js', 'php', 'python']
programming.splice(1, 2) //starting from index 1, deletes the next 2 items
console.log(programming)

const dataRandom = [1, true, 'A']
dataRandom.splice(2, 0, 'B') // this will add 'B' to index 2 and deletes 0 items and shift the prev index 2 to index 3
console.log(dataRandom)

dataRandom.splice(2, 1, 'Z') // essentially updates index 2 by deleting previous index 2 by 1 and replace it with new items
console.log(dataRandom)

// Add Data manual vs. Splice
const arrNum = [1, 2, 3]
//arrNum[5] = 10  ; this will update 10 into index-5 however empty items will remain in index 3 and 4
arrNum.splice(5, 0, 'A') // this will update A into the closest available index before 5 no empty items will be made
console.log(arrNum)

