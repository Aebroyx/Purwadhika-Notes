// LOOPING
console.log('Hello, World!')
console.log('Hello, World!')
console.log('Hello, World!')
console.log('Hello, World!')
console.log('Hello, World!')

// - While
/*
    while(condition) {
        Block of code
    }
*/

let start = 1
while(start <= 3) {
    console.log('Hello, World!')
    start++
}

// - Do While
/*
    do {
        Block of code
    } while(condition)
*/

let angka = 1
do {
    console.log(angka)
    angka++
} while(angka <= 3)

let angka2 = 100
do {
    console.log(angka2)
    angka2++
} while(angka2 < 10)

// - For Loop
/*
    for(start; condition; exitWay) {
        Block of code
    }
*/

for(let i=1; i <= 3; i++) {
    console.log(i)
}

// Ex. Buatlah console.log untuk menampilkan angka dari 10 -> 1

for(let i=10; i >= 1; i--) {
    console.log(i)
}