import {arrAverage} from './index';


it('return null if the argument is not array', () => {
    const result = arrAverage(typeof arr !== Array);
    expect(result).toEqual(null);
});

it('return average arithmetic', () => {
    const result = arrAverage([2, 4, 6]);
    expect(result).toEqual(4);
});


it('return true  if result function not string', () => {
    const result = arrAverage([4, 6, 8]);
    expect(typeof result !== 'string').toEqual(true);
});