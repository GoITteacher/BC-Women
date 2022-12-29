import { Bank } from './Bank.js';
import { loadFromLS, saveToLS } from './helper.js';

const refs = {
  formElem1: document.querySelector('.js-form1'),
  formElem2: document.querySelector('.js-form2'),
  formElem3: document.querySelector('.js-form3'),
  formContainer: document.querySelector('.js-form-container'),
};

const monoBank = new Bank();

refs.formElem1.addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
});

refs.formElem1.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;
  let buttonType = e.target.textContent;
  let value = +e.currentTarget.elements['input-value'].value;

  if (buttonType === 'Withdraw') {
    monoBank.withdraw(value);
  } else {
    monoBank.deposit(value);
  }

  saveToLS('bank', monoBank);
  renderTransactionMarkup(monoBank.balance, monoBank.historyTransaction);
});

const createTransactionMarkup = transactions => {
  return [...transactions]
    .reverse()
    .map(transaction => {
      const styles = transaction.type === 'deposit' ? 'deposit' : 'withdraw';

      return `
<li class='${styles}'>
  <span>Type: ${transaction.type}</span>
  <span>Value: ${transaction.value}</span>
  <span>Balance: ${transaction.balance}</span>
  <hr>
</li>`;
    })
    .join('');
};

const renderTransactionMarkup = (balance, transactions) => {
  const balanceElem = refs.formElem1.querySelector('.js-balance');
  balanceElem.textContent = balance;
  const listElem = refs.formElem1.querySelector('.js-history');
  listElem.innerHTML = createTransactionMarkup(transactions);
};

const onLoadWindow = () => {
  const bank = loadFromLS('bank');
  monoBank.setData(bank);
  renderTransactionMarkup(monoBank.balance, monoBank.historyTransaction);
};

onLoadWindow();
