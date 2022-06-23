import React, { useEffect, useState } from 'react'
import useCountry from '../hooks/useCountry'
import CountryItem from '../components/CountryItem'

const AllCountries = () => {
    const {countries} = useCountry()
  return (
    <div>
        <div className="row gy-4 p-3 mt-3">
            {
                countries?.map( country => (
                    <div key={country.fifa} className="col-12 col-sm-6 col-md-3">
                        <CountryItem 
                        flag={country.flags.png} 
                        name={country.name.common} 
                        population={country.population} 
                        region={country.region} 
                        capital={country.capital} 
                        />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AllCountries