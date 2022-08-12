import React from 'react'
import styled from 'styled-components'

export const CityList = ({city, state}) => {
  return (
    <div className='cityList'>
        <h4 style={{ color: "#364758", fontSize: "14px",textAlign:"start" }}>
          {city},{" "}
          <span
            style={{ color: "#49535e", fontWeight: "400", fontSize: "14px" }}
          >
            {state}
          </span>{" "}
        </h4>
       
    </div>
  )
}

