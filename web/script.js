const exchangeRates = {
  USD: 5,
  EUR: 4.5,
  BRL: 25,
  DOT: 1
};

const transactionInput = document.getElementById('transaction-value');
const currencySelector = document.getElementById('currency-selector');
const complexitySelector = document.getElementById('complexity');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');
const transactionCounterDiv = document.getElementById('transaction-counter');
const transactionHistoryDiv = document.getElementById('transaction-history');

let transactionCount = 0;
let transactionHistory = [];
let clearHistoryTimeout;

function formatCurrency(value, currency) {
  switch (currency) {
      case 'USD': return `$${value.toFixed(2)}`;
      case 'EUR': return `€${value.toFixed(2)}`;
      case 'BRL': return `R$${value.toFixed(2)}`;
      default: return `${value.toFixed(2)} DOT`;
  }
}

function updateTransactionCounter() {
  transactionCounterDiv.textContent = `Total Transactions Simulated: ${transactionCount}`;
}

function updateTransactionHistory() {
  transactionHistoryDiv.innerHTML = '<h3>Transaction History:</h3>' +
      transactionHistory.map(entry => `<p>${entry}</p>`).join('');
}

function clearTransactionHistory() {
  transactionHistory = [];
  updateTransactionHistory();
  alert('Transaction history cleared after 40 seconds!');
}

transactionInput.addEventListener('input', () => {
  if (parseFloat(transactionInput.value) <= 0) {
      resultDiv.innerHTML = '<p style="color:red;">Please enter a value greater than 0.</p>';
  } else {
      resultDiv.innerHTML = '';
  }
});

calculateButton.addEventListener('click', () => {
  const transactionValue = parseFloat(transactionInput.value);
  const selectedCurrency = currencySelector.value;
  const complexity = complexitySelector.value;

  if (isNaN(transactionValue) || transactionValue <= 0) {
      resultDiv.innerHTML = '<p style="color:red;">Please enter a valid transaction value greater than 0.</p>';
      return;
  }

  const transactionValueInDOT = selectedCurrency === 'DOT' ? transactionValue : transactionValue / exchangeRates[selectedCurrency];

  let gasPrice;
  switch (complexity) {
      case 'low': gasPrice = 0.01; break;
      case 'medium': gasPrice = 0.05; break;
      case 'high': gasPrice = 0.1; break;
  }

  const gasCostInDOT = transactionValueInDOT * gasPrice;
  const gasCostInSelectedCurrency = gasCostInDOT * exchangeRates[selectedCurrency];

  const resultHTML = `
      <p>Transaction Value: ${formatCurrency(transactionValue, selectedCurrency)}</p>
      <p>Complexity: ${complexity.charAt(0).toUpperCase() + complexity.slice(1)}</p>
      <p><strong>Gas Cost: ${formatCurrency(gasCostInSelectedCurrency, selectedCurrency)}</strong></p>
  `;

  resultDiv.innerHTML = resultHTML;

  // Increment counter and update history
  transactionCount++;
  transactionHistory.unshift(resultHTML);  // Prepend the new transaction to the history
  updateTransactionCounter();
  updateTransactionHistory();

  // Clear the previous timeout and start a new one
  clearTimeout(clearHistoryTimeout);
  clearHistoryTimeout = setTimeout(clearTransactionHistory, 40000); // 40 seconds
});
