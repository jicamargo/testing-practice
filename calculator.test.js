const Calculator = require('./calculator.js');

const calc = new Calculator();

describe('add', () => {
  
  test('add 1 + 2 ', () => 
    expect(calc.add(1, 2)).toBe(3));

  test('add 0 + 0 ', () => 
    expect(calc.add(0, 0)).toBe(0));

  test('add 999 + 1000', () => 
    expect(calc.add(999, 1000)).toBe(1999));

});

describe('subtract', () => {
  test('subtract 10 - 2 ', () => expect(calc.subtract(10, 2)).toBe(8));

  test('subtract 1 - 2 ', () => expect(calc.subtract(1, 2)).toBe(-1));

  test('subtract 20 - 0 ', () => expect(calc.subtract(20, 0)).toBe(20));
});

describe('multiply', () => {
  test('multiply 10 * 2 ', () => expect(calc.multiply(10, 2)).toBe(20));

  test('multiply 1 * 2 ', () => expect(calc.multiply(1, 2)).toBe(2));

  test('multiply 20 * 0 ', () => expect(calc.multiply(20, 0)).toBe(0));
});

describe('divide', () => {
  test('divide 10 / 2 ', () => expect(calc.divide(10, 2)).toBe(5));

  test('divide 1 / 2 ', () => expect(calc.divide(1, 2)).toBe(0.5));

  test('divide 20 / 0 ', () => expect(calc.divide(20, 0)).toBe("Cannot divide by zero"));
  // .toBe("Cannot divide by zero"));
});

