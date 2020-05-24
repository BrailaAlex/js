
import { createCalculator } from './index'


it('return decrease', () => {
    const check = createCalculator();
    check.decrease(2);

    let result = check.getMemo();
    expect(result).toEqual(-2);
});



it('return sum', () => {
    const check = createCalculator();
    check.add(2);

    let result = check.getMemo();
    expect(result).toEqual(2);
});