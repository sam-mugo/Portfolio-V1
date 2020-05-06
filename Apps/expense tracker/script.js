const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');


const dummyTransactions = [
    { id: 1, text: 'apple', amount: -25 },
    { id: 2, text: 'salary', amount: 400 },
    { id: 3, text: 'iphone', amount: -80 },
    { id: 4, text: 'freelance', amount: 120 }
    
];

let transactions = dummyTransactions;
//Add txts to DOM
function addTransactionDOM(transaction) {
    //Get sign
    const sign = transaction.amount < 0 ? '-' : '+'; 

    const item = document.createElement('li');

    //add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn">x</button`;
    list.appendChild(item);
}

function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
}

init();
