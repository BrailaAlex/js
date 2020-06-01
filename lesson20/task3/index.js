

 export class Wallet {
    
        _balance = 0
    
    getBalanse(){
        return this._balance;
    }

    deposit(amount) {
        this._balance += amount;
    }

    withdraw(amount){
        if(amount > this._balance){
            console.log('No enouhg funds');

            return;
            
        }
        this._balance -= amount;
    }

}
//const wallet1 = new Wallet();

//console.log(wallet1.getBalanse());
//wallet1.deposit(500);
//console.log(wallet1.getBalanse());
//wallet1.withdraw(600);
//console.log(wallet1.getBalanse());
//wallet1.withdraw(100);


