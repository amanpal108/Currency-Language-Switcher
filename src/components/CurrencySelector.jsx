import React from 'react';

const CurrencySelector = ({ currencies, selectedCurrency, onSelectCurrency }) => {
  return (
    <select value={selectedCurrency} onChange={onSelectCurrency}>
      {currencies.map(currency => (
        <option key={currency.code} value={currency.code}>{currency.name}</option>
      ))}
    </select>
  );
};

export default CurrencySelector;
