import {bankAccount} from "./bankAccount";

export class SavingsAccount extends bankAccount {
    constructor(currentDate: Date) {
        super();
        this.currentDate = currentDate;
        this.balance = 10000;
    }
}