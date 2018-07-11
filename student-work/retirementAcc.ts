import {bankAccount} from "./bankAccount";
import {Transaction} from "../common/interfaces/Transaction";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";

export class RetirementAccount extends bankAccount {
    constructor(currentDate: Date, accountHolderBirthday: Date) {
        super();
        this.currentDate = currentDate;
        this.accountHolderBirthday = accountHolderBirthday;
        this.balance = 100000;
    }

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        if (this.accountHolderBirthday && this.currentDate.getDate() - 60) {
            return {
                success: true,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: this.currentDate,
                errorMessage: "",
                transactionOrigin: transactionOrigin,
                description: ""

        };

        }
    }
}
//let checkdate = this.currentDate.setFullYear(this.currentDate.getFullYear() -60);