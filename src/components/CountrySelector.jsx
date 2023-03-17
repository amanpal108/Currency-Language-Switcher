import React from 'react';


const CountrySelector = ({ locales, selectedLocale, onSelectLocale }) => {
  return (
    <select value={selectedLocale} onChange={onSelectLocale}>
      {locales.map(locale => (
        <option key={locale.code} value={locale.code}>{locale.name}</option>
      ))}
    </select>
  );
};

export default CountrySelector;
