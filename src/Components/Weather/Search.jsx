import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ImLocation, ImSearch } from "react-icons/im";
import { cities } from '../../Cities';
import { CityList } from './CityList';
import styled from "styled-components";
import { DefaultLocation } from './DefaultLocation';

export const Search = ({city,setCity,coordinates,setCoordinates,setLoading}) => {
    
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
        cities.forEach((el)=>{
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
            setLoading(false);
        }).catch((err)=>{
            console.log(err)
        })
       }
        // eslint-disable-next-line
    },[coordinates]);
const currentLocation=()=>{
    DefaultLocation(setCoordinates);
}

  return (
    <Container>
        <Form onSubmit={getWeather}>
            <Item>
                <ImLocation className='uiLocation' onClick={currentLocation}/>
            </Item>
            <Input value={city} placeholder='search...'onChange={handleOnChange}/>
            <Button>
                <Item>
                <ImSearch className='uiLocation'/>
                </Item>
            </Button>
        </Form>
        {searchData && show === true &&(
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
    </Container>
  )
}

const Container = styled.div`
.cityList {
    width: 100%;
    position: relative;
    margin-top: 1rem;
  }
  .optionBox {
    position: absolute;
    z-index: 500;
    background-color:white;
    color: black;
   
    transition: 0.3s;
    width: 100%;
    max-height: 50vh;
    overflow-y: auto;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    ::-webkit-scrollbar {
      width: 10px;
    }  
}
.optionBox>div:hover{
    
     cursor: pointer;
     
     
}

border-radius: 0.5rem;
height:2.8rem ;
margin-top: 0.5rem;

position: sticky;
width: 100%;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`
const Form = styled.form`
    width:98%;
    display:flex;
    align-items: center;
    margin: auto;
    height: 98%;
`
const Item = styled.div`
padding: 0.5rem;
 .uiLocation{
    font-size: 1.5rem;
    &:hover{
        color: #302f2f;
        cursor: pointer;
        font-size: 2rem;
    }
 }
`;
const Input = styled.input`
    outline: none;
    width: 90%;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.2rem;
    border: none;
    &:focus{
    outline: none;
   }
   
`
const Button = styled.button`
    border: none;
    background: none;
    outline: none;
   
    
`