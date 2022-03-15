import React, { useEffect, useState } from 'react';
import getCountries from '../services/Country';
import CountryCard from '../components/CountryCard/CountryCard';

export default function Main() {
  const [countries, setCountries] = useState ([]);
  useEffect(()=>{
    const fetchCountries = async () => {
      const response = await getCountries();
      setCountries(response);
    };
    fetchCountries();

  }, []);
  return (
    <div className='main-place'>Main
      {countries.map((data) => (


        <CountryCard key={data.id} name={data.name} iso2={data.iso2} />

      ))}
    </div>
  );
}

