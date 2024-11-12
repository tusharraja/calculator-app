const add = require('../src/add');
const subtract = require('../src/subtract');
const multiply = require('../src/multiply');
const divide = require('../src/divide');
const modulus = require('../src/modulus');
const power = require('../src/power');
const sqrt = require('../src/sqrt');
const percentage = require('../src/percentage');

// Addition
test("Should add two numbers", () => {
  expect(add(25, 10)).toBe(35);
});

// Subtraction
test("Should subtract two numbers", () => {
  expect(subtract(25, 10)).toBe(15);
});

// Multiplication
test("Should multiply two numbers", () => {
  expect(multiply(2, 2)).toBe(4);
});

// Division
test("Should divide two numbers", () => {
  expect(divide(10, 5)).toBe(2);
});


// Modulus
test("Should calculate the modulus of two numbers", () => {
  expect(modulus(10, 3)).toBe(1);
});
test("Should throw an error when modulus by zero", () => {
  expect(() => modulus(10, 0)).toThrow("Cannot perform modulus by zero");
});

// Power
test("Should calculate the power of a number", () => {
  expect(power(2, 3)).toBe(8);
});

// Square Root
test("Should calculate the square root of a positive number", () => {
  expect(sqrt(9)).toBe(3);
});
test("Should throw an error for square root of a negative number", () => {
  expect(() => sqrt(-9)).toThrow("Cannot find the square root of a negative number");
});

// Percentage
test("Should calculate the percentage of a number with respect to a total", () => {
  expect(percentage(50, 200)).toBe(25);
});
test("Should throw an error when calculating percentage with zero total", () => {
  expect(() => percentage(50, 0)).toThrow("Total cannot be zero when calculating percentage");
});
