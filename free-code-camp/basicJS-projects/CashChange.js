'use strict';

const cidHelper = {
    amounts:  [100,20,10,5,1,0.25,0.1,0.05,0.01],
    units: ["ONE HUNDRED","TWENTY","TEN","FIVE","DOLLAR","QUARTER","DIME","NICKEL","PENNY"],
    getSibling: function (value) {
        if (typeof value === "string"){
            let i = this.units.indexOf(value);
            return (i>=0)? this.amounts[i] : null ;
        } else {
            let i = this.amounts.indexOf(value);
            return (i>=0)? this.units[i] : null ;
        }
    }
};

    // new Map([["PENNY",0.01],["NICKEL",0.05],["DIME",0.1],["QUARTER",0.25],["DOLLAR",1],
    // ["FIVE",5],["TEN",10],["TWENTY",20],["ONE HUNDRED",100]]);

class CashChange {
   constructor(status, change){
        this.status = status;
        this.change = change;
   }
}

function checkCashRegister(price, cash, cid) {

    let changeSum = cash - price;
    let cidSum = (cid.reduce((accum, value) => {
       return accum += value[1];
    }, 0).toFixed(2));

    let rest = cidSum - changeSum;

    if (rest < 0) return new CashChange('INSUFFICIENT_FUNDS', []);
    if (rest === 0) return new CashChange('CLOSED', cid);

    let change = matchChange(changeSum,cid);

    if (change){
        return new CashChange('OPEN', change);
    } else {
        return new CashChange('INSUFFICIENT_FUNDS', []);
    }

}

function matchChange(sum, cid){

    return cidHelper.amounts.reduce((accum, value, i, arr)=>{

        let multiplicator = Math.floor(sum/value);
        if (multiplicator === 0) return accum;

        let currName = cidHelper.getSibling(value);
        let amount = Math.min(multiplicator * value, cid[cid.length-i-1][1]);
        sum = (sum - amount).toFixed(2);

        if(sum != 0 && i === arr.length-1){
            return undefined;
        } else {
            accum.push([currName,amount]);
            return accum;
        }

    }, []);

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]


let ch = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(ch);