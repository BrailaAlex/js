
export let wallet = {
    transactions: [200, 300, 400, 500, 600, 700, 800, 900, 1000],
    getMax(){
        return Math.max.apply(null, this.transactions)

    },
    getMin(){
        return Math.min.apply(null, this.transactions)

    }

}
//console.log(wallet.getMax());
//console.log(wallet.getMin());
