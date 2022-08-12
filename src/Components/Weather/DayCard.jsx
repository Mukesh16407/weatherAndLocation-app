import React, { useEffect, useState } from 'react'
import sunny from '../../assets/sunny.png';
import cloudy from '../../assets/cloudy.png';
import rainy from '../../assets/rainy.png'
export const DayCard = ({dayData}) => {
    const [dayName, setDayName] = useState("");

    useEffect(()=>{
     
        let timeZone = dayData.dt;
        let day = new Date(timeZone*1000);
        var options = { weekday: "long" };
       const din = new Intl.DateTimeFormat("en-US", options).format(day);
       setDayName(din);

       
    },[dayData])
  return (
    <div>
        <p>{dayName}</p>
        <div>
        {Math.round(dayData.temp.max - 273)}°{" "}
        {Math.round(dayData.temp.min - 273)}°
        </div>
        <img src={dayData.weather[0].main  ==="Clear" ?sunny
        :dayData.weather[0].main==="Clouds" ?cloudy:rainy}
        />
        <div>{dayData.weather[0].main}</div>
    </div>
  )
}
