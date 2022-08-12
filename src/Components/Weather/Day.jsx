import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {addTemp} from '../../Redux/Action';
import { DayCard } from './DayCard';


export const Day = ({coordinates,setDayTemp,setCurrent}) => {

    const dispatch = useDispatch();

    const [weeklyData, setWeeklyData] = useState([]);
    const [selected, setSelected] = useState(0);

    useEffect(()=>{
        if(coordinates.lat){
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(({data})=>{
                setWeeklyData(data.daily);
                setCurrent(data.current);

                let dayTemp ={temp:data.daily[0].temp.day, weather:data.daily[0].weather[0].main}
                setDayTemp(dayTemp);
                let arr = [ `${data.daily[0].temp.morn}°C`,`${data.daily[0].temp.day}°C`,
                    `${data.daily[0].temp.eve}°C`,`${data.daily[0].temp.night}°C`, ];
                    dispatch(addTemp(arr));
                    
            })
            .catch((err) => console.log(err));
        }
     
    },[coordinates]);
    
    const showAllData=(day, i)=>{
       
        setSelected(i);
        let arr = [`${day.temp.morn}°C`,`${day.temp.day}°C`,`${day.temp.eve}°C`,`${day.temp.night}°C`];
        let dayTemp = {temp: day.temp.day, weather: day.weather[0].main,};
        setDayTemp(dayTemp);
        dispatch(addTemp(arr));
        
    }
    console.log(weeklyData)
  return (
    <div>
        {weeklyData && weeklyData.map((day, i)=>(
            <div onClick={()=>showAllData(day,i)} key={i}
            style={{border:selected === i ? "2px solid #373c3f" : "2px solid #e9e9e9",
                borderRadius: "0.5rem"}}>
               <DayCard dayData={day}/>
            </div>
        ))}
        
    </div>
  )
}
