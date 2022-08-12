import React, { useState } from 'react'
import { Search } from './Search'

export const Weather = () => {

    const [city, setCity] = useState("");
    const [coordinates, setCoordinates] = useState({});
  return (
    <div>
        <Search 
        setCity={setCity} 
        city={city}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        />
    </div>
  )
}
