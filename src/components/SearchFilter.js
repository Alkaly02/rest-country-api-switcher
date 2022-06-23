import React, { useState } from 'react'
import {FaSearchLocation} from 'react-icons/fa'
import useCountry from '../hooks/useCountry';

const SearchFilter = () => {
    const {countries, setShowCountries} = useCountry()
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const newCountry = countries.filter(country => country.name.common.toUpperCase() === input.toUpperCase());
        
        if(newCountry.length !== 0) {
            setError('')
            setShowCountries(newCountry)
        }else{
            setError('Pays intouvable !')
        }
    }

  return (
    <div className='d-sm-flex justify-content-between align-items-center position-relative'>
        <div className="form shadow position-relative mb-sm-0 mb-2">
            <form onSubmit={handleSubmit} action="">
                <FaSearchLocation className='position-absolute search' />
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Search for a country'
                type="search" 
                id="search" 
                className="form-control px-5" 
                aria-describedby="searchHelp" />
            </form>
            {
                error && <div style={{zIndex: '999', left: '45%'}} className='bg-danger p-3 position-absolute text-light'>{error}</div>
            }
        </div>
        <div className="select shadow">
        <select className="form-select" aria-label="Default select example">
            <option defaultValue>Filter by Region</option>
            <option value="1">Africa</option>
            <option value="2">America</option>
            <option value="3">Asia</option>
            <option value="3">Europe</option>
            <option value="3">Oceania</option>
        </select>
        </div>
    </div>
  )
}

export default SearchFilter