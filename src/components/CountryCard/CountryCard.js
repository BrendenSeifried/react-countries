import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  const iso = iso2.toLowerCase();
  return (
    <div className="country-card">
      <div className="details">
        <div className="name">{name}</div>
      </div>
      <div className="image">
        <img src={`https://flagcdn.com/32x24/${iso}.png`} />
      </div>
    </div>
  );
}
