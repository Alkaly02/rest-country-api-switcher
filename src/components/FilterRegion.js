import React from 'react'

const FilterRegion = ({handleSelect}) => {
  return (
    <select 
    onChange={handleSelect} 
    className="form-select" 
    aria-label="Default select example">
        <option value='' >Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
    </select>
  )
}

export default FilterRegion