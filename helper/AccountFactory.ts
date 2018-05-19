import {Account} from "../common/interfaces/Account";
import {CheckingAccount} from "../student-work/checkingAcc";
import {SavingsAccount} from "../student-work/savingsAcc";
import {RetirementAccount} from "../student-work/retirementAcc";

export class AccountFactory {

    static getCheckingAccountObject(currentDate: Date): Account {
        return new CheckingAccount(currentDate);
        // throw new Error("You need to implement this :)");
    }

    static getSavingsAccountObject(currentDate: Date): Account {
        return new SavingsAccount(currentDate);
        //throw new Error("You need to implement this :)");
    }

    static getRetirementAccountObject(currentDate: Date, accountHolderBirthDate: Date): Account {
        //throw new Error("You need to implement this :)");
        return new RetirementAccount(currentDate, accountHolderBirthDate);
    }

}