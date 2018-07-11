import { Account } from "../common/interfaces/Account";
import { Transaction} from "../common/interfaces/Transaction";
import { TransactionOrigin} from "../common/enums/TransactionOrigin";

export class bankAccount implements Account {
    currentDate: Date;
    balance: number;// I added the value of 0
    accountHistory: Transaction[];
    accountHolderBirthday?: Date;


    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        //let withdraw: Transaction;
        if(amount > this.balance) {
            return {
                success: false,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: this.currentDate,
                errorMessage: "Doesn't go through",
                transactionOrigin: transactionOrigin,
                description: ""
            };
        } else if (amount <= this.balance){
            return {
                success: true,
                amount: amount,
                resultBalance: this.balance -= amount,
                transactionDate: this.currentDate,
                errorMessage: "",
                transactionOrigin: transactionOrigin,
                description: ""
            };
        }
        //return withdraw;
    }

    depositMoney(amount: number, description: string): Transaction {
        return {
            success: true,
            amount: amount,
            resultBalance: this.balance += amount,
            transactionDate: this.currentDate,
            errorMessage: "",
            description: ""
        };

    }

    advanceDate(numberOfDays: number) {
        //throw new Error("needs help")
    }

}

