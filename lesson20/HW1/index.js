export class Order {
    constructor(price, city, type) {
        this.price = price;
        this.city = city;
        this.type = type;
        this.id = String(Math.floor(Math.random(100) * 1000));
        this.dateCreated = new Date;
        this.dateConfirmed = Date;
        this.isConfirmed = false;

    }


    checkPrice() {
        if (this.price < 1000) {
            return false;
        }
        return true;
    }

    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Date;
    }
    isValidType(type) {
        if (this.type === 'Purchase' || this.type == 'Sell') {
            return true
        };
        return false;
    }
}
//const order1 = new Order(2000, 'Kiev', 'Purchase')
//const order2 = new Order(3500, 'Dnipro', 'Sale of goods')
///console.log(order1)
//console.log(order2)



