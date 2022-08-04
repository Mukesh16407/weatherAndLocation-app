import React  from 'react'

import { cities } from '../city';

export const AutoComplete = ({city,data}) => {

  return (
    <div>
       {cities.filter(item=>{
        const searchTerm = city.toLowerCase();
        const cityName = item.name.toLowerCase()||item.state.toLowerCase();

        return searchTerm && cityName.startsWith(searchTerm) && cityName !==searchTerm
       }).slice(0,15)
       .map((item,index)=>{
        return(
          <div
           onClick={()=>data(item.name)}
           key={index}>{item.name}</div>
        )
       })}
      </div>
  )
}
