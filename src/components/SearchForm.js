import React from 'react'
import {FaSearchLocation} from 'react-icons/fa'

const SearchForm = ({searchCountry, input, onInputChange}) => {
  return (
    <form autoComplete='off' onSubmit={searchCountry} action="">
        <FaSearchLocation className='position-absolute search' />
        <input
        value={input}
        onChange={onInputChange}
        placeholder='Search for a country'
        type="search" 
        id="search" 
        className="form-control px-5" 
        aria-describedby="searchHelp" />
    </form>
)
}

export default SearchForm