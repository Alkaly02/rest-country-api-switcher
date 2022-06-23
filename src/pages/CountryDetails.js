import React, { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom'
import useCountry from '../hooks/useCountry';
import CountryItemDetails from '../components/CountryItemDetails'
import {FaArrowLeft} from 'react-icons/fa'

const CountryDetails = () => {
    const {countryName} = useParams();
    const {countries, loading} = useCountry();
    const [countryDetails, setCountryDetails] = useState();

    useEffect(() => {
        const newCountry = countries.filter(country => country.name.common.toUpperCase() === countryName.toUpperCase())

        if(newCountry.length !== 0){
            setCountryDetails(newCountry)
        }
    }, [countryName,countries])
  return (
    <div>
        <Link className='btn btn-outline-secondary' to='/'><FaArrowLeft /></Link>
        <div className="row gy-4 mt-3">
            {
                countryDetails?.map( (country, index) => (
                    <div key={index} className="col-12">
                        <CountryItemDetails 
                        flag={country.flags.png} 
                        name={country.name.common} 
                        population={country.population} 
                        region={country.region} 
                        capital={country.capital}
                        subRegion={country.subregion}
                        topLevelDomain={country.tld}
                        car={country.car}
                        countryBorders={country.borders}
                        />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CountryDetails