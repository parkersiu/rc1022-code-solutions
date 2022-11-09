/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var account = new Account(this.nextAccountNumber, holder);
    account.nextAccountNumber = this.nextAccountNumber;
    account.holder = holder;
    account.deposit(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return account.number;
  } else return null;
};

Bank.prototype.getAccount = function (number) {
  var result = null;
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      result = this.accounts[i];
    }
  } return result;
};

Bank.prototype.getTotalAssets = function () {
  var result = 0;
  if (this.accounts.length > 0) {
    for (var i = 0; i < this.accounts.length; i++) {
      result += this.accounts[i].getBalance();
    }
  } return result;
};
