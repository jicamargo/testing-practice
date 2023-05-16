const { stringLength } = require('./stringlength.js');

it('should return error (length between 1 and 10)', () => 
  expect(stringLength('I am Jorge Camargo')).toBe("The string must be between 1 and 10 characters long"));

it('should return error (length between 1 and 10)', () => 
  expect(stringLength('')).toBe("The string must be between 1 and 10 characters long"));

it('should return the length of the string', () => 
  expect(stringLength('Testing')).toBe(7));


