import {filterNames} from './index';


it('should return typeof result', () => {
    const result = filterNames(['Alex', 'Bill', 'Bob', 'Ann', 'Sandra', 'Irenn', 'Michel', 'Sinatra'], 'ra');
    expect(typeof result !== 'string').toEqual(true);
});


it('return empty array if there are no matching elements ', () => {
    const result = filterNames(['Alex', 'Bill', 'Bob', 'Ann', 'Sandra', 'Irenn', 'Michel', 'Sinatra'], 'nor');
    expect(result).toEqual([]);
});


it('return length array ', () => {
    const result = filterNames(['Alex', 'Bill', 'Bob', 'Ann', 'Sandra', 'Irenn', 'Michel', 'Sinatra'], 'ra');
    expect(result[1].length > 5).toEqual(true);

});

