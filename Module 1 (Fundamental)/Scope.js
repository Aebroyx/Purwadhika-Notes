// SCOPE
// var: Tidak Mengenal Scope
// let & const: Mengenal scope

// var
{
    var name = 'Raihan'
}
console.log(name)

// let & const
// - Declare di global scope, bisa diaskses di locap scope
// {
//      const number = 10
// }
// console.log(number)

{
    const point = 100
    {
        console.log(point)
        {
            console.log(point)
        }
    }
}

{
    {
        const discount = 50
        console.log(discount)
    }
}

// Buatlah program untuk menampilkan setiap character yang ada di dalama variable
// menggunakan console.log
// Ex. Input = 'pwdk'
// Output= p, w, d, k

let input = 'Pwdk'
for (let i=0; i<input.length; i++) {
    console.log(input[i])
}

// Buatlah program untuk menampilkan setiap angka pada sebuah data bertipe data number
// Ex. Input : 62857853331
// Output: 6, 2, 8, etc

let input2 = 62857853331
let inputToString = input2.toString()
console.log(inputToString)
for (let i = 0; i < inputToString.length; i++) {
    console.log(inputToString[i])
}