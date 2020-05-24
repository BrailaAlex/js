import { createLogger } from './index'

it('return warn message', () => {

    let warnTest = createLogger()
    warnTest.warn('Limit page.');

    let result = warnTest.getRecords('warn');
    expect(result[0].message).toEqual('Limit page.');
});

it('return error message', () => {

    let errorTest = createLogger();
    errorTest.error('This message')

    let result = errorTest.getRecords('error');
    expect(result[0].message).toEqual('This message');

});