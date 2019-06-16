function telephone (getInfo, getBalance, chargeBalance) {
this.info = getInfo;
this.balance = getBalance;
this.chargeBalance = chargeBalance; 
}

var Nokia = new telephone("9PureView", "5", "92%" )
console.log(Nokia)