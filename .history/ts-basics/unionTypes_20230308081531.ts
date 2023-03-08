// age can be a string or a number
function printAge(age: number | string): void {
    console.log(`You are ${age} years old.`)
}

// price throws error because string cannot be multiplied by number
function calculateTax(price: number | string, tax: number) {
    // return price * tax
}

const stuff: number | string