const {reverseString} = require('./reversestring.js');

it('should return: GNITSET', () => 
  expect(reverseString("TESTING")).toBe("GNITSET"));

it('should return: 54321', () => 
  expect(reverseString("12345")).toBe("54321"));
