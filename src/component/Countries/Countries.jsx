import { useEffect } from "react";
import { useState } from "react"
import Country from "../Country/Country";
import './Countries.css'

export default function Countries(){
    const [countries , setCountries]= useState([]);
    const [visitedCountries, SetVisitedCountry]=useState([])
    const [visitedFlags, setVisitedFlags]= useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    const handleVisitedFlags = flags =>{
        console.log('add visited flags...');
        const newVisitedFlags = [...visitedFlags,flags]
        setVisitedFlags(newVisitedFlags)
    }

    const handleVisitedCountry = country =>{
        console.log('add this to your visited country.')
        const newVisitedCountry = [...visitedCountries, country]
        SetVisitedCountry(newVisitedCountry)
    }


    return(
        <>
        <div>
            <h3>Countries: {countries.length}</h3>
            <h3>Visited Country: {visitedCountries.length}</h3>
            <ul>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
            <h3>Visited flags: </h3>
                <div className="visitedFlag-container">
                {
                    visitedFlags.map((flag, idx) => <img src={flag} key={idx} alt="" />)
                }
                </div> 
            
            <div className="country-container">
                {
                    countries.map(country => <Country country={country} key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>

        </div>
        </>
    )
}