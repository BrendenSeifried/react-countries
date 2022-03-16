import React from 'react';

export default function Dropdown({ continent }) {
  return (
    <div>Dropdown
      <select>
        {continent.map((stuff) => (
          <option key={stuff}>{stuff}</option>
          
        ))}
      </select>
    </div>
  );
}
