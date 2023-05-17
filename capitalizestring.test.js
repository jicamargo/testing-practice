const { capitalizeString } = require('./capitalizestring.js');

test('should return error (input must be a string)', () =>
  expect(() => capitalizeString(123)).toThrow('Input must be a string'));

test('should return Bogotá', () =>
  expect(capitalizeString('bogotá')).toEqual('Bogotá'));
