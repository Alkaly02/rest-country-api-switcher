import React from 'react'

const CountryItemDetails = ({flag, name, population, region, capital, subRegion, topLevelDomain, car, countryBorders}) => {
  return (
    <>
        <div className="d-sm-flex w-100 gx-2">
          <div className=" me-4">
              <img style={{height: '200px', objectFit: 'cover', width: '100%'}} src={flag} alt="flag" className="img-card img-fluid" />
          </div>
          <div className="mt-5 mt-sm-0">
              <h4 className="text-title">{name}</h4>
              <div className="p-0 d-sm-flex justify-content-between">
                  <div className="left pe-sm-5">
                    <p className="card-text p-0 m-0"><span className='fw-bold'>Population : </span>{population}</p>
                    <p className="card-text m-0 py-1"><span className='fw-bold'>Region : </span>{region}</p>
                    <p className="card-text m-0 py-1"><span className='fw-bold'>Sub Region : </span>{subRegion}</p>
                    <p className="card-text m-0"><span className='fw-bold'>Capital : </span> {capital}</p>
                  </div>
                  <div className="right ps-sm-5">
                    <p className="card-text m-0"><span className='fw-bold'>Tld : </span>{topLevelDomain}</p>
                    <p className="card-text m-0"><span className='fw-bold'>Car side : </span>{car.side}</p>
                  </div>
              </div>
              <p><span className='strong'>Border countries: </span> {
                countryBorders?.map((border, index) => (
                  <button key={`${border}-${index}`} className="btn">{border}</button>
                ))
              } </p>
          </div>
        </div>
    </>
  )
}

export default CountryItemDetails