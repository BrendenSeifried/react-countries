import React, { useEffect, useState } from 'react';
import getCountries from '../services/Country';
import CountryCard from '../components/CountryCard/CountryCard';
import Dropdown from '../components/Dropdown/Dropdown';
import './Main.css';

export default function Main() {
  const [countries, setCountries] = useState ([]);
  const continent = ['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Oceania'];
  const [cont, setCont] = useState ('Asia');
  const [load, setLoad] = useState(true);

  useEffect(()=>{
    const fetchCountries = async () => {

     

      try {
        const response = await getCountries();
        setCountries(response);
      } catch (e) {
        alert(e.message);
      }
      setTimeout(() => {
        setLoad(false);
      }, 1000);
    };
    fetchCountries();

  }, []);

  const filterContinent = () => {
    
    return countries.filter((whatever) => cont === whatever.continent);
  };
  console.log(filterContinent());
  if (load) return <div className='loader'>Buffering</div>;


  return (
    <div>
      <div className='dropdown'>
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

