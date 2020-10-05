import transformNumber from '../app';

test('checking transformNumber', () => {
  const test = transformNumber('8 (920) 55-55-55');

  const expexted = '+7920555555';

  expect(test).toEqual(expexted);
});

test('checking transformNumber', () => {
  const test = transformNumber('+86 000 000 0000');

  const expexted = '+860000000000';

  expect(test).toEqual(expexted);
});

test('checking transformNumber', () => {
  const test = transformNumber('+7 960 000 00 00');

  const expexted = '+79600000000';

  expect(test).toEqual(expexted);
});
