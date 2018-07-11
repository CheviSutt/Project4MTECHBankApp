import {bankAccount} from "./bankAccount";
import {AccountType} from "../common/enums/AccountType";
import {Transaction} from "../common/interfaces/Transaction";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";

export class CheckingAccount extends bankAccount {
    constructor(currentdate) {
        super(currentdate);
        //this.currentDate = currentDate;
        this.balance = 1000;
    }

    // withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
    //     //let withdrawal: Transaction;
    //     if (amount > this.balance) {
    //         return {
    //             success: false,
    //             amount: amount,
    //             resultBalance: this.balance,
    //             transactionDate: this.currentDate,
    //             errorMessage: "Doesn't go through",
    //             transactionOrigin: transactionOrigin,
    //             description: ""
    //         };
    //     }
    // }
    advanceDate(days){
        super.calcInterest(days, .01);
    }
}