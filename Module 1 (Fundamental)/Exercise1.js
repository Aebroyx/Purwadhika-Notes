// 1 find area of rectangle
const length = 5
const width = 3

let area = length * width
console.log(area)

// 2 find perimeter of rectangle
let perimeter = (length*2) + (width*2)
console.log(perimeter)

const radius = 5
const pi = Math.PI

//3 find diameter, curcumference, and area of circle
let circumference = 2*pi*radius
console.log(circumference)

let diameter = circumference / pi
console.log(diameter)

let areaCircle = pi*Math.pow(radius, 2)
console.log(areaCircle)

//4 find angle from triangle
const a = 80
const b = 65
const totalAngle = 180

let c = totalAngle - 80 - 65
console.log(c)

//5 find the difference between dates in days
var date1 = new Date("2022-01-20")
var date2 = new Date("2022-01-22")
let dateDifferenceInTime = date2.getTime() - date1.getTime()
let dateDifferenceInDays = dateDifferenceInTime / (1000*3600*24)
console.log(dateDifferenceInDays)

//6
// convert days to years, months and days
const numberOfDays = 400

const years = Math.floor(numberOfDays / 365)
const months = Math.floor(numberOfDays % 365 / 30)
const days = Math.floor(numberOfDays % 365 % 30)

console.log(years + ' years, ' + months + ' months, ' + days + ' days')


