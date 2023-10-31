// NESTED LOOP
/*
for (let i = 1; i <= 5; i++) {
    console.log(`Looping i = ${i}`)
    for (let j = 1; j <=5; j++) {
        console.log(`Looping i = ${j}`)
    }
}
*/

// Example: Rectangle
/*
    ***
    ***
    ***
*/
let pattern1 = ''
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <=3; j++) {
        pattern1 += '*'
    }
    pattern1 += '\n'
}
console.log(pattern1)

// Example Pattern:
/*
    *****
    *****
    *****
*/

let pattern2 = ''
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <=5; j++) {
        pattern2 += '*'
    }
    pattern2 += '\n'
}
console.log(pattern2)

// Example Pattern:
/*
    *
    **
    ***
    ****
    *****
*/

let pattern3 = ''
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <=i; j++) {
        pattern3 += '*'
    }
    pattern3 += '\n'
}
console.log(pattern3)

// Example Pattern:
/*
    *****
    ****
    ***
    **
    *
*/
let pattern4 = ''
for (let i = 5; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
        pattern4 += '*'
    }
    pattern4 += '\n'
}
console.log(pattern4)