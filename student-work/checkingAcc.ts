import {bankAccount} from "./bankAccount";
import {Transaction} from "../common/interfaces/Transaction";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";

export class CheckingAccount extends bankAccount {
    constructor(currentDate: Date) {
        super();
        this.currentDate = currentDate;
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

}