import React, { useEffect } from 'react';
import getCountries from '../services/Country';

export default function Main() {
  useEffect(()=>{
    const fetchCountries = async () => {
      const response = await getCountries();
    //   setBlogs(response);
    };
    fetchCountries ();

  }, []);
  return (
    <div>Main
        

    </div>
  );
}

