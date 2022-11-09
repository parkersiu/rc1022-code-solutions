/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var transaction = new Transaction('deposit', amount);
    transaction.type = 'deposit';
    transaction.amount = amount;
    this.transactions.push(transaction);
    return true;
  } else if (Number.isInteger(amount) && amount < 0) {
    return false;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function withdraw(amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var transaction = new Transaction('withdrawal', amount);
    transaction.type = 'withdrawal';
    transaction.amount = amount;
    this.transactions.push(transaction);
    return true;
  } else if (Number.isInteger(amount) && amount < 0) {
    return false;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function getBalance() {
  var total = 0;
  if (this.transactions.length > 0) {
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'withdrawal') {
        total -= this.transactions[i].amount;
      } else if (this.transactions[i].type === 'deposit') {
        total += this.transactions[i].amount;
      }
    } return total;
  } else return 0;
};
