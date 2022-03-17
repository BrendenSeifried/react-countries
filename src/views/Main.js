import React, { useEffect, useState } from 'react';
import getCountries from '../services/Country';
import CountryCard from '../components/CountryCard/CountryCard';
import Dropdown from '../components/Dropdown/Dropdown';

export default function Main() {
  const [countries, setCountries] = useState ([]);
  const continent = ['All', 'Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', ' Australia'];
  const [cont, setCont] = useState ('All');
  useEffect(()=>{
    const fetchCountries = async () => {
      try {
        const response = await getCountries();
        setCountries(response);
      } catch (e) {
        alert(e.message);
      }
    };
    fetchCountries();

  }, []);

  const filterContinent = () => {
    return countries.filter((whatever) => cont === whatever.continent);
  };

  return (
    <div>
      <div>
        <Dropdown key={continent} continent={continent} setCont={setCont}/>

      </div>
      <div className='main-place'>
        {filterContinent().map((data) => (
          <CountryCard key={data.id} name={data.name} iso2={data.iso2} />
        ))}
      </div>
      
    </div>
  );
}

