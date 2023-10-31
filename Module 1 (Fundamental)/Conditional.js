// CONDITIONAL STATEMENTS

// if Statement
const pointStudent = 80
if (pointStudent > 70) {
    console.log('Student Lulus!')
}

if ('abc' == 'abc') {
    console.log('Sama!')
}

// if else Statement
if (50 < 80) {
    console.log('Running') // Running
} else {
    console.log('Error')
}

// if - else if - else statement

const nilaiSiswa = 90
if (nilaiSiswa > 90) {
    console.log('Lulus Baik')
} else if (nilaiSiswa > 70) {
    console.log('Lulus') // Lulus
} else {
    console.log('Tidak Lulus')
}

const nilaiSiswa1 = 75
if (nilaiSiswa1 > 90) {
    console.log('Lulus Baik')
} else if (nilaiSiswa1 > 74) {
    console.log('Lulus Bagus') // Lulus Bagus
} else if (nilaiSiswa1 > 70) {
    console.log('Lulus')
} else {
    console.log('Tidak Lulus')
}

// Ternary Operator
// Ex. Saya ingin memvalidasi panjang input dari form user dengan 2 kondisi apabila 
// jumlah karakter > 19 -> Register failed
// jumlah karakter < 20 -> register success
const formUser = 'defryan@gmail.com'

if(formUser.length > 19) {
    console.log('Register Failed')
} else {
    console.log('Register Success')
}

formUser.length > 19 ? console.log('Register Failed') : console.log('Register Success')

const point = 70
point > 90 ? console.log('Nilai Anda baik') : point > 70 ? console.log('Nilai Anda Cukup') : console.log('Nilai Anda Cukup')

