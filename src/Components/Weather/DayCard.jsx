import React, { useEffect, useState } from 'react'
import sunny from '../../assets/sunny.png';
import cloudy from '../../assets/cloudy.png';
import rainy from '../../assets/rainy.png'
import styled from 'styled-components';
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
    <Box>
        <Title>{dayName}</Title>
        <Title>
        {Math.round(dayData.temp.max - 273)}°{" "}
        {Math.round(dayData.temp.min - 273)}°
        </Title>
        <Logo src={dayData.weather[0].main  ==="Clear" ?sunny
        :dayData.weather[0].main==="Clouds" ?cloudy:rainy}
        alt={dayData.weather[0].main}/>
        <Title>{dayData.weather[0].main}</Title>
    </Box>
  )
}


const Box = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  min-width: max-content;
  cursor: pointer;
  transition: 0.3s;
`
const Title = styled.h4``;
const Logo = styled.img`
  height: 30px;
  width: 30px;
`;