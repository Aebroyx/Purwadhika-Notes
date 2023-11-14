// Callback
// This is callback
const foo = () => {
    console.log('foo')
}

const bar = (a) => {
    console.log('bar')
    a()
}

bar(foo) // bar foo

// This is not callback
const hello = () => {
    console.log('hello')
}

const world = () => {
    hello()
    console.log('world')
}

world() // hello world

klub = 
console.log(!klub)