import React from 'react'

const AutoComplete = ({countries, searchCountryOnAutoComplete, input}) => {
  return (
    <div style={{zIndex: '999', left: '45%'}} className='bg-light p-2 position-absolute text-dark'>
        {
            countries.filter(country => country.name.common.toUpperCase().startsWith(input.toUpperCase()))
            .map((country, index) => (
                <div style={{cursor: 'pointer'}} className='my-1' key={`${country.name.common}-${index}`}>
                    <span onClick={() => searchCountryOnAutoComplete(country.name.common) }>
                       <img className='me-2' style={{width: '20px', fontSize: '0.8rem'}} src={country.flags.png} alt='Crountry flag' /> 
                       {country.name.common}
                    </span>
                </div> 
            ))
        }
    </div>
  )
}

export default AutoComplete