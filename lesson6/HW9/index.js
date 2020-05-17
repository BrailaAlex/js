let clients = ['Ann', 'john', 'User'];
let balances = [1400, 87, -6];
let client = 'John';
let amount = 50;


let indexArr;

function withdraw(slients, balances, client, amount) {

    for (let i = 0; i < clients.length; i++) {
        if (clients[i] == client) {
            indexArr = i;
        }

    }
    if (balances[indexArr >= amount]) {
        return (balances[indexArr] = balances[indexArr] - amount)
    } else {
        return -1;
    }

}





//let balanceMoney = withdraw(clients, balances, clients, amount);

//console.log(balanceMoney);
