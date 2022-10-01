import capitalize from "./assignment"

test("to uppercase", () => {
  expect(capitalize("something")).toBe("SOMETHING")
})
