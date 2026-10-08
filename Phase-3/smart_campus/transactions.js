import { StudentWallet } from './wallet.js';

let newWallet = new StudentWallet(500);
newWallet.deposit(4500);
newWallet.withdraw(1200);
newWallet.getbalance();

export function getWalletBalance(){
    return newWallet.balance;
}

