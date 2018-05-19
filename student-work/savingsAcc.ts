import {bankAccount} from "./bankAccount";
import {Transaction} from "../common/interfaces/Transaction";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";

export class SavingsAccount extends bankAccount {
    withdrawals = 0;
    checkDate = new Date().getMonth();

    constructor(currentDate: Date) {
        super();
        this.currentDate = currentDate;
        this.balance = 10000;
    }

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {

        //new attempt here
        // let monthCheck = this.currentDate.getMonth();
        // if (monthCheck === this.checkDate && this.withdrawals > 6){
        //     return {
        //         success: false,
        //         amount: amount,
        //         resultBalance: this.balance,
        //         transactionDate: this.currentDate,
        //         errorMessage: "You've reached your mobile transaction limit.",
        //         transactionOrigin: transactionOrigin,
        //         description: ""
        //     };
        // }

        //transaction type count supplied by web or phone
        if (transactionOrigin === 1 || transactionOrigin === 2) {
            this.withdrawals++;
            }

        //checking if there has been more than six transactions
        if (this.withdrawals <= 6) {
            return super.withdrawMoney(amount, description, transactionOrigin);

        } else {
            return {
                success: false,
                amount: -amount,
                resultBalance: this.balance,
                transactionDate: this.currentDate,
                description: "",
                errorMessage: "Can only withdraw money 6 times per month from web or phone",
                transactionOrigin: transactionOrigin
            }
        }
    }

    // advanceDate(days: number) {
    //     //storing current month to watch for change
    //     let currMonth = this.currentDate.getMonth();
    //     //super.calcInterest(days, .02);
    //
    //     //checking if the month has changed
    //     if(this.currentDate.getMonth() !== currMonth){
    //         this.withdrawals = 0;
    //         }
    // }

    //experiment code
    // let remoteTrans = new Date().getMonth();
    // let monthCheck = this.currentDate.getMonth();
    //
    // if (monthCheck && remoteTrans === this.currentDate.getMonth() && this.withdrawals < 6) {
    //     return {
    //         success: false,
    //         amount: amount,
    //         resultBalance: this.balance,
    //         transactionDate: this.currentDate,
    //         errorMessage: "",
    //         transactionOrigin: transactionOrigin,
    //         description: ""
    //     };
    // }

}

