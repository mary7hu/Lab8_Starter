// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('test isPhoneNumber', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
    expect(functions.isPhoneNumber('123 456 7890')).toBe(false);
    expect(functions.isPhoneNumber('(123)-(456)-(7890)')).toBe(false);
});

test('test isEmail', () => {
    expect(functions.isEmail('word@aAe_.aAA')).toBe(true);
    expect(functions.isEmail('abcdefg@gmail.com')).toBe(true);
    expect(functions.isEmail('word@')).toBe(false);
    expect(functions.isEmail('abcdefg@gmail.1234')).toBe(false);
});

test('test isStrongPassword', () => {
    expect(functions.isStrongPassword('weadfsvfdswwede')).toBe(true);
    expect(functions.isStrongPassword('weadfsv1234_56')).toBe(true);
    expect(functions.isStrongPassword('0weadfsv1234_56')).toBe(false);
    expect(functions.isStrongPassword('weadfsv!1234_56')).toBe(false);
});

test('test isDate', () => {
    expect(functions.isDate('12/34/5678')).toBe(true);
    expect(functions.isDate('10/27/3256')).toBe(true);
    expect(functions.isDate('/10/27/3256/')).toBe(false);
    expect(functions.isDate('10/27/32')).toBe(false);
});

test('test isHexColor', () => {
    expect(functions.isHexColor('#Aa0aaa')).toBe(true);
    expect(functions.isHexColor('Aa0')).toBe(true);
    expect(functions.isHexColor('#Aa0a')).toBe(false);
    expect(functions.isHexColor('#Aa0a000')).toBe(false);
});