// TRUTHY FALSY JAVASCRIPT: Nilai non-boolean yang dikonversikan menjadi nilai boolean

// Falsy: 0, '', null, undefined, NaN
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))

// Truthy: anything other than the above
console.log(Boolean(1))
console.log(Boolean(1225))
console.log(Boolean('abc'))


// Example: Validasi inputan dari user, apabila kosong maka munculkan pesan error
const input = ''
if (input === '') {
    console.log('Error')
 } else {
    console.log('Success')
 }

 if (input) { // since the value is true then the conditional will accept
    console.log('Success')
 } else {
    console.log('Error')
 }

 // Example: Buatlah validasi input dengan ketentuan:
 //         - Apabila jumlah karakter > 10, maka tampilkan pesan error
 //         - Apabila jumlah karakter <= 10, maka tampilkan pesan sucess

 const input2 = 'hello bro'
 if (input2.length > 10) {
    console.log('Error')
 } else if (input2.length <= 10) {
    console.log('Success')
 }