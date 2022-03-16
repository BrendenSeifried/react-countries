import React, { useEffect, useState } from 'react';
import getCountries from '../services/Country';
import CountryCard from '../components/CountryCard/CountryCard';
import Dropdown from '../components/Dropdown/Dropdown';

export default function Main() {
  const [countries, setCountries] = useState ([]);
  const continent = ['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', ' Australia'];
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

  // const filterCats = () => {
  //   return cats.filter((cat) => cat.type === type || type === 'All');
  // };

  // const filterContinent = () => {
  //   return countries.filter((cont) => cont.continent === continent);
  // };

  return (
    <div>
      <div>
        {/* {filterContinent().map((cont) => )} */}
        <Dropdown continent={continent}/>
      </div>
      <div className='main-place'>Main
        {countries.map((data) => (
          <CountryCard key={data.id} name={data.name} iso2={data.iso2} />
        ))}
      </div>
      
    </div>
  );
}

