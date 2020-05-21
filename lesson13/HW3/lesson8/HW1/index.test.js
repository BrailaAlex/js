import {transaction} from './index';


it('return name of the company', () => {
    const result = transaction.agent.company;
    expect(result).toEqual('NYSE');
});

it('return the name of the country', () => {
    const result = transaction.agent.country;
    expect(result).toEqual('Ukraine')
});

it('return country currency', () => {
    const result = transaction['currency'];
    expect(result).toEqual('USD');
});

