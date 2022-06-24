import React from 'react'
import useCountry from '../hooks/useCountry'
import CountryItem from '../components/CountryItem'
import EmtyList from '../components/EmtyList'

const AllCountries = () => {
    const {showCountries} = useCountry()
  return (
    <div>
        <div className="row gy-4 mt-3">
            {
                showCountries.length !== 0 ?
                showCountries.map( (country, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-3">
                        <CountryItem 
                        flag={country.flags.png} 
                        name={country.name.common} 
                        population={country.population} 
                        region={country.region} 
                        capital={country.capital} 
                        />
                    </div>
                )) : <EmtyList />
            }
        </div>
    </div>
  )
}

export default AllCountries