import React, { useEffect, useState } from 'react'
import { ImLocation, ImSearch } from "react-icons/im";
import styled from 'styled-components';
import { AutoComplete } from './AutoComplete';
import { useDebouncing } from './Debouncing';


export const Search = () => {
 
  const [city,setCity] = useState("");
  const [searchData, setSearchData] = useState([]);
 const debounceValue = useDebouncing(city,2000);

const handleChange =(e)=>{
 setCity(e.target.value);
}

useEffect(()=>{
  if(debounceValue){
    console.log("searchTerm:",debounceValue)

  }else{
console.log("somethingElse")
  }
},[debounceValue]);

const onSearch = (searchTerm)=>{

  setCity(searchTerm);
   console.log("search",searchTerm)
}
   
  return (
    <>
    <StyleContainer>
      <ImLocation className="location" />
      <Input
      value={city}
      placeholder="Search"
      onChange={handleChange}/>
      <ImSearch className="location" onClick={()=>onSearch(city)}/>
    </StyleContainer>
    <AutoComplete city={city} data={onSearch}/>
    </>
    
  )
}

const StyleContainer = styled.div`
 width: 97%;
 margin: 10px auto;
 height: 45px;
 display: flex;
 justify-content: space-around;
 align-items: center;
 border-radius: 12px;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

 .location {
    width: 40px;
    height: 30px;
    margin-top: 4px;
    

}
.location:hover{
   color: rgb(110, 107, 107);
   height: 33px;
}
`
const Input = styled.input`
width: 80%;
height: 98%;
border: none;
font-size: 24px;
font-weight:200;
margin-left: 5px;
&:focus{
    outline: none;
}
`

