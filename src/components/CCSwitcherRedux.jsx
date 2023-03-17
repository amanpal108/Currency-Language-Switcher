import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CurrencySelector from './CurrencySelector';
import CountrySelector from './CountrySelector';
import { setSelectedCurrency, setSelectedLocale } from '../CCSlice';
import locales from '../data/locales.json';
import currencies from '../data/currencies.json'


const CurrencyCountrySwitcherRedux = () => {
  const dispatch = useDispatch();

  const selectedCurrency = useSelector((state) => state.currencyCountry.selectedCurrency);
  const selectedLocale = useSelector((state) => state.currencyCountry.selectedLocale);

  const handleCurrencyChange = (event) => {
    dispatch(setSelectedCurrency(event.target.value));
  };

  const handleLocaleChange = (event) => {
    dispatch(setSelectedLocale(event.target.value));
  };

  return (
    <div>
      <CurrencySelector currencies={currencies} selectedCurrency={selectedCurrency} onSelectCurrency={handleCurrencyChange} />
      <CountrySelector locales={locales} selectedLocale={selectedLocale} onSelectLocale={handleLocaleChange} />
      <p>Selected currency: {selectedCurrency}</p>
     {/*  <p>Selected country: {selectedLocale} {locales.find(locale => locale.code === selectedLocale).flag}</p> */}
     <img src={locales.find(locale => locale.code === selectedLocale).flag} alt={`Flag of ${selectedLocale}`} />
    </div>
  );
};

export default CurrencyCountrySwitcherRedux;





