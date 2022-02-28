class BankAccount {

    constructor() {
        this.accountBalance=0;
        this.accOpen=false;
    }

    open() {
        if(this.accOpen==false)
            this.accOpen=true;
        else
            throw new (ValueError);
    }

    close() {
        if(this.accOpen==true){
            this.accOpen=false;
            this.accountBalance=0;
        }else{
            throw new (ValueError);
        }
    }

    deposit(money) {
        if(this.accOpen==false)
            throw new (ValueError);    
        else{
            if(money>0)
                this.accountBalance=this.accountBalance+money;
            else
                throw new (ValueError);
        }
    }

    withdraw(money) {
        if(this.accOpen==false)
            throw new (ValueError);    
        else{
            if(money<=this.accountBalance){
                if(money>0)
                    this.accountBalance=this.accountBalance-money;
                else
                    throw new (ValueError);                
            }else
                throw new (ValueError);
            
        }
    }

    get balance() {
        if(this.accOpen==false)
        throw new (ValueError);
        return this.accountBalance
    }
}

class ValueError extends Error {
    constructor() {
        super('Bank account error');        
    }
}

module.exports = {
    BankAccount,
    ValueError
}