//https://www.codewars.com/kata/515e271a311df0350d00000f

const squareSum = (arr) => {
    let result = 0
    for (let index = 0; index < arr.length; index++) {
        result += arr[index] * arr[index]
    }
    return result
}