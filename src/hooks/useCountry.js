import React from 'react';
import {CountryContext} from '../context/CountryContext';
import { useContext } from 'react';

const useCountry = () => {
  return useContext(CountryContext)
}

export default useCountry;