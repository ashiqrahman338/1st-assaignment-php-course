

class bankAccount{
    
    #balance=500;

    deposite(amount){
        this.#balance+=amount;

    }

    cashOut(amount){
        this.#balance-=amount;
    }

    checkBalance(){
        return this.#balance;
    }

}

const acc= new bankAccount();
acc.deposite(20);
acc.cashOut(100);
console.log (acc.checkBalance());


