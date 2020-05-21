import {user} from './index';


it('return hobby user', () => {
    const result = user.hobby;

    expect(result).toEqual('football')
});

it('return address country user', () => {
    const result = user.address.country;

    expect(result).toEqual('Ukraine');
});

it('return number building user', () => {
    const result = user.address.building;

    expect(result).toEqual('17');
});

