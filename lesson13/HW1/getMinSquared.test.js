import { getMinSquaredNumber } from './getMinSquaredNumber';

it('get null with an empty array', () => {
    const result = getMinSquaredNumber([]);

    expect(result).toEqual(null);
});

it('should get null if not array', () => {
    const result = getMinSquaredNumber(1);

    expect(result).toEqual(null);
})

it(' get min array number squared', () => {
    const result = getMinSquaredNumber([1, 2]);

    expect(result).toEqual(1);
})