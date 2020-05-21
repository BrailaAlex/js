import { calc } from './calculator';

it('type check null if not string', () => {
    const result = calc(typeof arr !== 'string');

    expect(result).toEqual(null)
});


it('should get sum numbers', () => {
    const result = calc('1 + 2');


    expect(result).toEqual('1 + 2 = 3')
});


it('should get subtraction numbers', () => {
    const result = calc('2 - 1');

    expect(result).toEqual('2 - 1 = 1')
});


it('should get multiplication of numbers', () => {
    const result = calc('2 * 2');

    expect(result).toEqual('2 * 2 = 4')
});

it('should get division of numbers', () => {
    const result = calc('4 / 2');

    expect(result).toEqual('4 / 2 = 2')
});



