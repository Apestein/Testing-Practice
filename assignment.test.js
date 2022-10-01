import {
  capitalize,
  reverseString,
  calculator,
  cipher,
  analyzeArray,
} from "./assignment"

test("capitalize", () => {
  expect(capitalize("something")).toBe("SOMETHING")
})

test("reverseString", () => {
  expect(reverseString("something")).toBe("gnihtemos")
})

test("calculator.add", () => {
  expect(calculator.add(1, 2)).toBe(3)
})

test("calculator.sub", () => {
  expect(calculator.sub(2, 1)).toBe(1)
})

test("calculator.multiple", () => {
  expect(calculator.multiple(1, 2)).toBe(2)
})

test("calculator.divide", () => {
  expect(calculator.divide(1, 2)).toBeCloseTo(1 / 2)
})

test("caesarCipher", () => {
  expect(cipher("abc")).toBe("bcd")
})

test("caesarCipher", () => {
  expect(cipher("xyz")).toBe("yza")
})

test("analyze", () => {
  const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(object)
})
