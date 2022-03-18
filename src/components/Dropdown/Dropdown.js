import React from 'react';
import './Dropdown.css';

export default function Dropdown({ continent, setCont }) {
  return (
    <div className='dropdown'>Select Country
      <select onChange={(e) => setCont(e.target.value)}>
        {continent.map((stuff) => (
          <option key={stuff}>{stuff}</option>
        ))}
      </select>
    </div>
  );
}

