import React from 'react'
import AllCountries from './AllCountries'
import SearchFilter from '../components/SearchFilter';
import Loader from '../components/Loader';
import useCountry from '../hooks/useCountry';

const Home = () => {
    const {loading} = useCountry()
    return (
    <>  
        <SearchFilter />
        {
            loading ? <Loader /> : <AllCountries />
        }
    </>
    )
}

export default Home