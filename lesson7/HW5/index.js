//const clients = ['John', 'Bob', "Ann"];
//const balances = [1500, 600, 800];

//let client = 'Bob';
//let amount = 200;


const withdraw = (clients, balances, client, amount) => {
    if (balances[clients.indexOf(client)] >= amount)
        return (balances[clients.indexOf(client)] = balances[clients.indexOf(client)] - amount);
    return -1;
}
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6]))