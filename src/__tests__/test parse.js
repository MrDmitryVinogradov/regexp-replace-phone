import parsePhone from '../js/parcePhone'

test('should parse 1', () => {
  expect(parsePhone('8 (927) 000-00-00')).toBe('+79270000000');
});


test('should parse 2', () => {
  expect(parsePhone('+86 000 000 0000')).toBe('+860000000000');
});


