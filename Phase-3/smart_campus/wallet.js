
export class StudentWallet {
    constructor (balance){
        this.balance = balance;
    }
    deposit(amount){
        if (amount <= 0) {
            return 'You cannot deposit an invalid amount'
        }else{
            return this.balance += amount;
        }
        
    }
    withdraw(amount){
        if (amount <= 0) {
            return 'invalid amount to withdraw'
        }
        else if (amount > this.balance) {
            return 'insuffient balance';
        } else{
            return this.balance -= amount
        }
    }
    getbalance(){
        return `Here is the available balance ${this.balance}`;

    }
}