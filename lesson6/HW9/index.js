let clients = ['Ann', 'John', 'User'];
let balances = [1400, 87, -6];

function withdraw(clients, balances, client, amount) {

    let indexOfArray;
    
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] === client) {
            indexOfArray = i;
        }
    }
    if (balances[indexOfArray] >= amount) {
        return (balances[indexOfArray] = balances[indexOfArray] - amount);
    } else {
        return -1;
    }
}


//let balanceMoney = withdraw(clients, balances, clients);

//console.log(balanceMoney);
