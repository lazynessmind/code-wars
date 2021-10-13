//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/

const mathFunc = (number, op) => !op ? number : op(number)

const plus = (number) => (otherNumber) => otherNumber + number
const minus = (number) => (otherNumber) => otherNumber - number
const times = (number) => (otherNumber) => otherNumber * number
const dividedBy = (number) => (otherNumber) => Math.floor(otherNumber / number)

const zero = (op) => mathFunc(0, op)
const one = (op) => mathFunc(1, op)
const two = (op) => mathFunc(2, op)
const three = (op) => mathFunc(3, op)
const four = (op) => mathFunc(4, op)
const five = (op) => mathFunc(5, op)
const six = (op) => mathFunc(6, op)
const seven = (op) => mathFunc(7, op)
const eight = (op) => mathFunc(8, op)
const nine = (op) => mathFunc(9, op)