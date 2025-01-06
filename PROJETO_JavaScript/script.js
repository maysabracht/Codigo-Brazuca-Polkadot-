// Get DOM elements
const transactionInput = document.getElementById('transaction-value');
const complexitySelector = document.getElementById('complexity');
const currencySelector = document.getElementById('currency-selector');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');
const transactionCounter = document.getElementById('transaction-counter');

// Exchange rates (relative to 1 DOT)
const exchangeRates = {
  DOT: 1,
  USD: 5,
  EUR: 4.5,
  BRL: 25,
};

let transactionCount = 0;

function showError(message) {
  resultDiv.innerHTML = `<p style="color:red;">${message}</p>`;
}

function clearError() {
  resultDiv.innerHTML = '';
}

function formatCurrency(value, currency) {
  switch (currency) {
    case 'USD':
      return `$${value.toFixed(2)}`;
    case 'EUR':
      return `€${value.toFixed(2)}`;
    case 'BRL':
      return `R$${value.toFixed(2)}`;
    case 'DOT':
      return `${value.toFixed(2)} DOT`;
    default:
      return `${value.toFixed(2)} DOT`;
  }
}

function updateTransactionCounter() {
  transactionCounter.textContent = `Transações Simuladas: ${transactionCount}`;
}

calculateButton.addEventListener('click', () => {
  const transactionValue = parseFloat(transactionInput.value);
  const selectedCurrency = currencySelector.value;

  if (isNaN(transactionValue) || transactionValue <= 0) {
    showError('Por favor, insira um valor de transação válido maior que 0.');
    return;
  }

  clearError();

  // Perform gas price calculation
  const complexity = complexitySelector.value;
  let gasPrice;

  switch (complexity) {
    case 'low':
      gasPrice = 0.01;
      break;
    case 'medium':
      gasPrice = 0.05;
      break;
    case 'high':
      gasPrice = 0.1;
      break;
    default:
      showError('Complexidade inválida selecionada.');
      return;
  }

  // Convert transaction value to DOT if needed
  let transactionValueInDOT = transactionValue;
  if (selectedCurrency !== 'DOT') {
    transactionValueInDOT = transactionValue / exchangeRates[selectedCurrency];
  }

  // Calculate gas cost
  const gasCostInDOT = transactionValueInDOT * gasPrice;
  const gasCostInSelectedCurrency = gasCostInDOT * exchangeRates[selectedCurrency];

// Format the display string
let transactionDisplay;
let gasCostDisplay;

if (selectedCurrency === 'DOT') {
    // For DOT currency, just show the value once
    transactionDisplay = `${transactionValue.toFixed(2)} DOT`;
    gasCostDisplay = `${gasCostInDOT.toFixed(2)} DOT`;
} else {
    // For other currencies, show both the selected currency and DOT equivalent
    transactionDisplay = `${formatCurrency(transactionValue, selectedCurrency)} (${transactionValueInDOT.toFixed(2)} DOT)`;
    gasCostDisplay = `${formatCurrency(gasCostInSelectedCurrency, selectedCurrency)} (${gasCostInDOT.toFixed(2)} DOT)`;
}

  // Display the result
  resultDiv.innerHTML = `
    <p>Valor da Transação: ${transactionDisplay}</p>
    <p>Complexidade: ${complexity.charAt(0).toUpperCase() + complexity.slice(1)}</p>
    <p><strong>Custo Estimado do Gas: ${gasCostDisplay}</strong></p>
  `;

  transactionCount++;
  updateTransactionCounter();
});

transactionInput.addEventListener('input', () => {
  const transactionValue = parseFloat(transactionInput.value);
  if (isNaN(transactionValue) || transactionValue <= 0) {
    showError('Por favor, insira um valor de transação válido maior que 0.');
  } else {
    clearError();
  }
});


