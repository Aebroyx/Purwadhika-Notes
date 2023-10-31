// ● Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”
let input1 = 'hello world'
let splitWords = input1.split(' ')

for (let i = 0; i < splitWords.length; i++) {
    splitWords[i] = splitWords[i][0].toUpperCase() + splitWords[i].substring(1)
}
let newInput1 = splitWords.join(" ")
console.log(newInput1)

// ● Write a code to reverse a string.
// ○ Example : “hello” → “olleh”
let input2 = 'hello'
let reverseInput = ''

for (i = input2.length-1; i >= 0; i--) {
    reverseInput = reverseInput + input2[i]
}
console.log(reverseInput)

// ● Write a code to swap the case of each character from string
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
let input3 = "The QuiCk BrOwN Fox"
let inputSwap = ""

for (i = 0; i < input3.length; i++) {
    if (input3[i] === input3[i].toLowerCase()) {
        inputSwap += input3[i].toUpperCase()
    } else {
        inputSwap += input3[i].toLowerCase()
    }
}
console.log(inputSwap)

// ● Write a code to find the largest of two given integers
// ○ Example : num1 = 42, num2 = 27 → 42


// ● Write a conditional statement to sort three numbers
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42


// ● Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.
// ○ Example : “hello” → 1


// ● Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`