// LOOP ARRAY
const campusPwd = ['BSD', 'BTM', 'JKT']
for (let i = 0; i < campusPwd.length; i++) {
    console.log(campusPwd[i])
}

// Break & Continue
// Break: Untuk menghentikan looping
// Continue: untuk skip looping

for (let i = 1; i<=10; i++) {
    console.log(i)
    if(i ===5) break;
}

for (let i = 1; i<=10; i++) {
    if(i === 5) continue;
    console.log(i)
}

// Case Odd/Even Array
let input = [1, 4, 5, 8, 10]
let newInput = []

for (i = 0; i < input.length; i++) {{
        if (input[i] % 2 == 0) {
            newInput.push('Even')
        } else if (input[i] % 2 == 1){
            newInput.push('Odd')
        }
    }
}
console.log(newInput)

// Shortcut for loop for array
for (let item of input) {{
        if (item % 2 == 0) {
            newInput.push('Even')
        } else if (item % 2 == 1){
            newInput.push('Odd')
        }
    }
}