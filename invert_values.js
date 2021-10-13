//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

const invert = (arr) => {
    let finalArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0) finalArr[i] = -0
        else if(arr[i] === -0) finalArr[i] = 0
        else finalArr[i] = -Math.abs(arr[i])
    }
    return finalArr
}