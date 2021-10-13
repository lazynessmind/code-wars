//https://www.codewars.com/kata/554ca54ffa7d91b236000023

const deleteNth = (arr,n) => {
    let looked = {}

    const finalArr = arr.filter((val) => {
        looked[val] = (looked[val] || 0) + 1
        return looked[val] <= n
    })

    return finalArr
  }