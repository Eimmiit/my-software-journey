export default class Wallets{
    constructor(){
        this.walletBalance = 0;
    }

    deposit(amount){
        this.walletBalance += amount;
    }

    withdraw(amount){
        this.walletBalance -= amount;
    }

    getBalance(){
        return this.walletBalance;
    }
}