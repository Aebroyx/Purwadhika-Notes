// CLASS: Blueprint untuk mencetak object dengan nama property yang sama
class Students {
    name = ''
    hobby = ''
    program = ''

    constructor(name, hobby, program) {
        this.name = name,
        this.hobby = hobby,
        this.program = program
    }
}

const students1 = new Students('Defryan', 'Futsal', 'WD')
console.log(students1)
const students2 = new Students('Kevin', 'Olahraga', 'WD')
console.log(students2)

const studentsArr = [
    new Students('Defryan', 'Futsal', 'WD'),
    new Students('Kevin', 'Olahraga', 'WD')
]

console.log(studentsArr)

// Example
// Di sebuah supermarket, terdapat beberapa kategori produk. Mulai dari buah, elektronik dan
// pakaian. Setiap kategori produk memiliki entititas yang berbeda-beda, seperti produk name, stock, dll.
// 1. Jabarkan apa saja entitas yang dimiliki untuk masing-masing kateogri produk!
// 2. Buatkan class untuk mencetak entitas tersebut!

/* Cara Manual
class Buah {
    constructor(name, stock, price) {
        this.name = name,
        this.stock = stock,
        this.price = price
    }
}

class Elektronik {
    constructor(name, stock, price) {
        this.name = name,
        this.stock = stock,
        this.price = price
    }
}

class Pakaian {
    constructor(name, price, size) {
        this.name = name,
        this.price = price,
        this.size = size
    }
}
*/

// Cara Cepat
class Product{
    constructor(name, price, stock, brand){
        this.name = name,
        this.price = price,
        this.stock = stock
        this.brand = brand
    }
}

class Buah extends Product {
    constructor(name, price, stock, unit, expiredDate) {
        super(name, price, stock)
        this.unit = unit,
        this.expiredDate = expiredDate
    }
}

class Elektronik extends Product {
    constructor(name, price, stock, weight, brand) {
        super(name, price, stock, brand)
        this.weight = weight
    }
}

class Pakaian extends Product {
    constructor(name, price, stock, size, brand) {
        super(name, price, stock, brand)
        this.size = size
    }
}

// Encapsulation
// Proses pembungkusan data kedalam class
// Public Property
// Private Property

class Users {
    username = ''
    email = ''
    phoneNumber = ''
    #password = ''

    constructor(username, email, phoneNumber, password) {
        this.username = username,
        this.email = email,
        this.phoneNumber = phoneNumber,
        this.#password = password
    }
}

const user1 = new Users('ryandefryan', 'ryan@gmail.com', '081212342069', 'newpassword')
console.log(user1)