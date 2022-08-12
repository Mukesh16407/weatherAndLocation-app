import React, { useState } from 'react'
import { Day } from './Day';
import { Search } from './Search'

export const Weather = () => {

    const [city, setCity] = useState("");
    const [coordinates, setCoordinates] = useState({});
    const [dayTemp, setDayTemp] = useState({});
    const [current, setCurrent] = useState({});
  return (
    <div>
      <div>
      <Search 
        setCity={setCity} 
        city={city}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        />
      </div>
      <div>
        <Day
        coordinates={coordinates}
        setDayTemp={setDayTemp}
        setCurrent={setCurrent}/>
     </div>
    </div>
    
  )
}
