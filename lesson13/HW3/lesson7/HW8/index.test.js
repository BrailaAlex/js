import {arrAverage} from './index';


it('return null if the argument is not array', () => {
    const result = arrAverage(typeof arr !== Array);
    expect(result).toEqual(null);
});

it('return average arithmetic', () => {
    const result = arrAverage([2, 4, 6]);
    expect(result).toEqual(4);
});


it('return null if result function not array', () => {
    const result = arrAverage([4, 6, 8]);
    expect(typeof result !== 'string').toEqual(true);
});