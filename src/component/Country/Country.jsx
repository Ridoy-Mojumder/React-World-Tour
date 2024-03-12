import { useState } from 'react';
import './Country.css'
import CountryDetail from '../../ContryDetail/CountryDetail';
export default function Country({country,handleVisitedCountry, handleVisitedFlags}){
    
    const {name,flags,population, area, cca3}=country;

    const [visited, setVisited]=useState(false)

    const handleVisited = () =>{
        setVisited(!visited)
    }


    const passWithParams = () =>{
        handleVisitedCountry(country);
    }
    


    return(
        <div >
            <div className={`country ${visited? 'visited': 'non-visited'}`}>
                <h3>Name: {name.common} </h3>
                <img src={flags.png} alt="" className='img'/>
                <p>Population: {population}</p>
                <p>Area: {area}</p>
                <p>Code: {cca3}</p>
                <button className="btn" onClick={passWithParams}>Mark as visited Country</button><br /><br />
                <button className="btn" onClick={() => handleVisitedFlags(country.flags.png)}>Mark as visited flags</button><br /><br />
                <button className="btn" onClick={handleVisited}>{visited? 'Visited': 'Going'}</button>
                {
                    visited&& 'I have visited this country..'
                }
                <hr />
                <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
                ></CountryDetail>
            </div>
        </div>
    )
}