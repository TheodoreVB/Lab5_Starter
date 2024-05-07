// unit.test.js 

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests
test('Tests a valid phone number using -', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(4);
});
test('Tests a valid phone number using ()', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('Tests an invalid phone number without dashes', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('Tests an invalid phone number that contains characters', () => {
  expect(isPhoneNumber('1c3-4h6-7b90')).toBe(false);
});

// isEmail tests
test('Tests a valid email', () => {
  expect(isEmail('email@ucsd.edu')).toBe(true);
});
test('Tests a valid email with numbers', () => {
  expect(isEmail('email12345@ucsd.edu')).toBe(true);
});
test('Tests an invalid email without a domain', () => {
  expect(isEmail('email@ucsd')).toBe(false);
});
test('Tests an invalid email without an @', () => {
  expect(isEmail('emailucsd.edu')).toBe(false);
});

// isStrongPassword tests
test('Tests a valid password', () => {
  expect(isStrongPassword('password')).toBe(true);
});
test('Tests a valid password with numbers', () => {
  expect(isStrongPassword('password123')).toBe(true);
});
test('Tests an invalid password that begins without a letter', () => {
  expect(isStrongPassword('123password')).toBe(false);
});
test('Tests an invalid password that contains a special character', () => {
  expect(isStrongPassword('password!')).toBe(false);
});

// isDate tests
test('Tests a valid date', () => {
  expect(isDate('12/31/2024')).toBe(true);
});
test('Tests a valid date with single digit month and day', () => {
  expect(isDate('1/1/2024')).toBe(true);
});
test('Tests an invalid date with a letter', () => {
  expect(isDate('a/31/2024')).toBe(false);
});
test('Tests an invalid date with a year less than 4 digits', () => {
  expect(isDate('12/31/24')).toBe(false);
});

//isHexColor tests
test('Tests a valid 3 character hex code', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('Tests a valid 6 character hex code', () => {
  expect(isHexColor('#ffffff')).toBe(true);
});
test('Tests an invalid hex code with a letter not in hex', () => {
  expect(isHexColor('#ffz')).toBe(false);
});
test('Tests an invalid hex code with 4 digits', () => {
  expect(isHexColor('#ffff')).toBe(false);
});