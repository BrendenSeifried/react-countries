import React from 'react';

export default function Dropdown({ continent, setCont }) {
  return (
    <div>Dropdown
      <select onChange={(e) => setCont(e.target.value)}>
        {continent.map((stuff) => (
          <option key={stuff}>{stuff}</option>
        ))}
      </select>
    </div>
  );
}
