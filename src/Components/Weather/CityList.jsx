import React from 'react'
import styled from 'styled-components'

export const CityList = ({city, state}) => {
  return (
    <Container className='cityList'>
        <h4 style={{ color: "#364758", fontSize: "14px",textAlign:"start" }}>
          {city},{" "}
          <span
            style={{ color: "#49535e", fontWeight: "400", fontSize: "14px" }}
          >
            {state}
          </span>{" "}
        </h4>
       
    </Container>
  )
}

const Container = styled.div`
  margin-left: 1rem;
  background: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  &:hover{
    background-color: #d7d5d5;
  }
`