import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ImLocation, ImSearch } from "react-icons/im";
import { cities } from '../../Cities';
import { CityList } from './CityList';

export const Search = ({city,setCity,coordinates,setCoordinates}) => {
    
   let id

    const [searchData, setSearchData] = useState([]);
    const [show, setShow] = useState(true);
 
    const handleOnChange =(e)=>{
        setShow(true)
      setCity(e.target.value);
       
      if(id){
        setTimeout(id)
      }

        id=setTimeout(()=>{
      
        let filterData =[];
        cities.map((el)=>{
            if (el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) {
                filterData.push(el);
              }
        })
        setSearchData([...filterData])
      },1000);
     
       
    }
    const getWeather=(e)=>{
        e.preventDefault();
        if(city ===""){
            alert("please Enter City...")
        }else{
           axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
           .then(({data})=>{
            const obj = {lat:data.coord.lat,lon:data.coord.lon}

            setCoordinates(obj)
            setCity(data.name)
           }).catch((err)=>{
            console.log(err)
           })
        }
        setShow(false);
    }
    
    const getFormCityList =(city)=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(({data})=>{
            const obj = { lat: data.coord.lat, lon: data.coord.lon };
            setCoordinates(obj);
            setCity(data.name); 
        })
        setShow(false);
    }
    useEffect(()=>{
       if(coordinates.lat !== undefined){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(({data})=>{
            setCity(data.name);
        }).catch((err)=>{
            console.log(err)
        })
       }
    },[coordinates]);


  return (
    <div>
        <form onSubmit={getWeather}>
            <div>
                <ImLocation/>
            </div>
            <input value={city} placeholder='search...'onChange={handleOnChange}/>
            <button>
                <div>
                <ImSearch/>
                </div>
            </button>
        </form>
        {searchData && (
            <div className='cityList'>
                 <div className='optionBox'>
                 {searchData.map((cty, i)=>{
                     return(
                        <div key={i} onClick={()=>getFormCityList(cty)}>
                           <CityList city={cty.name} state={cty.state}/>
                        </div>
                     )
                 })}
                 </div>
            </div>
        )}
    </div>
  )
}
