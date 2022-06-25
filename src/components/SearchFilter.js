import React, { useEffect, useState } from 'react'
import useCountry from '../hooks/useCountry';
import AutoComplete from './AutoComplete';
import SearchForm from './SearchForm';
import FilterRegion from './FilterRegion';

const SearchFilter = () => {
    const {countries, setShowCountries} = useCountry()
    const [input, setInput] = useState('');
    const [select, setSelect] = useState('')
    const [searchByRegion, setSearchByRegion] = useState([])
    // autocompletion
    const [display, setDisplay] = useState(false);

    const searchCountry = (e) => {
        e.preventDefault()
        setDisplay(false)
        const newCountry = searchByRegion.length !== 0 ? 
        searchByRegion.filter(country => country.name.common.toUpperCase() === input.toUpperCase()) :
        countries.filter(country => country.name.common.toUpperCase() === input.toUpperCase());
        
        if(newCountry.length !== 0) {
            return setShowCountries(newCountry)
        }else{
            return setShowCountries([])
        }
    }

    const handleSelect = (e) => {
        setSelect(e.target.value)
    }

    const onInputChange = (e) => {
        setDisplay(true)
        setInput(e.target.value)
    }
    
    useEffect(() => {
        const countryWithSameRegion = countries.filter(country => country.region.toUpperCase() === select.toUpperCase());
        setSearchByRegion(countryWithSameRegion);
        if(countryWithSameRegion.length !== 0){
            setShowCountries(countryWithSameRegion)
        }
    }, [select, countries, setShowCountries])

    const searchCountryOnAutoComplete = (countryName) => {
        setInput(countryName);
        setDisplay(false)
        const newCountry = searchByRegion.length !== 0 ? 
        searchByRegion.filter(country => country.name.common.toUpperCase() === countryName.toUpperCase()) :
        countries.filter(country => country.name.common.toUpperCase() === countryName.toUpperCase());
        
        if(newCountry.length !== 0) {
            return setShowCountries(newCountry)
        }else{
            return setShowCountries([])
        }
    }

  return (
    <div className='d-sm-flex justify-content-between align-items-center position-relative'>
        <div className="form shadow position-relative mb-sm-0 mb-2">
            <SearchForm 
            searchCountry={searchCountry} 
            input={input} 
            onInputChange={onInputChange} />
            {/* autoComplete */}
            {
                (display && input !== '' ) && <AutoComplete 
                countries={countries} 
                searchCountryOnAutoComplete={searchCountryOnAutoComplete}
                input={input}
                />
            }
        </div>
        <div className="select shadow">
            <FilterRegion handleSelect={handleSelect} />
        </div>
    </div>
  )
}

export default SearchFilter