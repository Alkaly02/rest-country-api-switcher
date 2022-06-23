import React from 'react'

const CountryItem = ({flag, name, population, region, capital}) => {
  return (
    <div className="card">
        <img style={{height: '200px', objectFit: 'cover'}} src={flag} alt="" className="img-card" />
        <div className="card-body">
            <h4 className="text-title">{name}</h4>
            <p className="card-text p-0 m-0"><span className='fw-bold'>Population : </span>{population}</p>
            <p className="card-text m-0 py-1"><span className='fw-bold'>Region : </span>{region}</p>
            <p className="card-text m-0"><span className='fw-bold'>Capital : </span> {capital}</p>
        </div>
    </div>
  )
}

export default CountryItem