function capitalize(s) {
  return s.toUpperCase()
}

function reverseString(s) {
  return s.split("").reverse().join("")
}

const calculator = {
  add: (a, b) => {
    return a + b
  },
  sub: (a, b) => {
    return a - b
  },
  multiple: (a, b) => {
    return a * b
  },
  divide: (a, b) => {
    return a / b
  },
}

function cipher(s) {
  const arr = s.split("")
  for (let i = 0; i < arr.length; i++) {
    let newChar = String.fromCharCode(s.charCodeAt(i) + 1)
    if (s.charCodeAt(i) + 1 > 122) newChar = "a"
    arr[i] = newChar
  }
  return arr.join("")
}

function analyzeArray(array) {
  let average =
    array.reduce((previous, current) => previous + current) / array.length
  let min = Math.min(...array)
  let max = Math.max(...array)
  let length = array.length
  return { average, min, max, length }
}

export { capitalize, reverseString, calculator, cipher, analyzeArray }
