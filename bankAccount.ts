import { Account } from "../common/interfaces/Account";
import { Transaction} from "../common/interfaces/Transaction";
import { TransactionOrigin} from "../common/enums/TransactionOrigin";
//First code attempt below

// export class bankAccount implements Account {
//     currentDate: Date;
//     balance: number;
//     accountHistory: Transaction[];
//     accountHolderBirthday?: Date;
//
//     withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
//         //let withdraw: Transaction;
//         if(amount > this.balance) {
//             return {
//                 success: false,
//                 amount: -amount,
//                 resultBalance: this.balance,
//                 transactionDate: this.currentDate,
//                 errorMessage: "Doesn't go through",
//                 transactionOrigin: transactionOrigin,
//                 description: ""
//             };
//
//         } else if (amount <= this.balance){
//              return{
//                 success: true,
//                 amount: -amount,
//                 resultBalance: this.balance -= amount,
//                 transactionDate: this.currentDate,
//                 errorMessage: "",
//                 transactionOrigin: transactionOrigin,
//                 description: ""
//             };
//         }
//         this.accountHistory.push();
//
//     }
//
//     depositMoney(amount: number, description: string): Transaction {
//         return {
//             success: true,
//             amount: amount,
//             resultBalance: this.balance += amount,
//             transactionDate: this.currentDate,
//             errorMessage: "",
//             description: ""
//         };
//
//     }
//
//     advanceDate(numberOfDays: number) {
//         //throw new Error("needs help")
//     }
//
// }

export class bankAccount implements Account{

    currentDate: Date;
    balance: number;
    accountHistory: Transaction[];
    accountHolderBirthday?: Date;

    constructor(currentdate) {
        this.currentDate = currentdate;
        this.accountHistory = [];
    }

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction{
        if(amount <= this.balance){
            let transaction = {
                success: true,
                amount: -amount,
                resultBalance: this.balance -= amount,
                transactionDate: this.currentDate,
                description: `Pulled out $${amount}`,
                errorMessage: "",

            };
            this.accountHistory.push(transaction);
            return transaction;
        }
        else if (amount > this.balance){
            let transaction = {
                success: false,
                amount: -amount,
                resultBalance: this.balance,
                transactionDate: this.currentDate,
                description: description,
                errorMessage: "Not enough Money",
                transactionOrigin: transactionOrigin
            };
            this.accountHistory.push(transaction);
            return transaction;
        }
    }

    depositMoney(amount: number, description: string): Transaction {
        let transaction = {
            success: true,
            amount: amount,
            resultBalance: this.balance += amount,
            transactionDate: this.currentDate,
            description: description,
            errorMessage: "",
        };

        this.accountHistory.push(transaction);
        return transaction;
    }

    advanceDate(numberOfDays: number) {
    }

    //advance one day at a time to watch for first of month
    calcInterest(numberOfDays: number, rate: number) {
        for (let i = 1; i <= numberOfDays; i++) {

            this.currentDate.setDate(this.currentDate.getDate() + 1);

            //if day of month = 1, deposit monthly interest
            if (this.currentDate.getDate() === 1) {
                let deposit = this.balance * rate / 12;//calculate interest based off rate
                let roundedDeposit = Math.round(deposit *100) / 100;//rounds to two decimals
                this.depositMoney(roundedDeposit, "Monthly Interest");
            }
        }
    }
}