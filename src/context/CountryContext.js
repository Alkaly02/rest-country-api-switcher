import { createContext } from "react";
import { useState, useEffect } from "react";

export const CountryContext = createContext();

export const CountryProvider = ({children}) => {

    const [loading, setLoading] = useState(true);

    const [countries, setCountries] = useState([]);
    const [showCountries, setShowCountries] = useState()
    
    const getData = async () => {
        const res = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await res.json()
        setCountries(data)
        setShowCountries(data)
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    const value = {
        countries,
        showCountries,
        setCountries,
        setShowCountries
    }

    return (
        <CountryContext.Provider value={value}>
            { !loading && children}
        </CountryContext.Provider>
    )
}