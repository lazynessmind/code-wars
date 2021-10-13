//https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function() {
    const words = this.split(" ")
    let jadenCase = ""

    for(let i = 0; i < words.length; i++){
        let word = words[i]
        jadenCase += word.charAt(0).toUpperCase() + word.substring(1, word.length) + " "
    }

    return jadenCase.trimEnd()
}