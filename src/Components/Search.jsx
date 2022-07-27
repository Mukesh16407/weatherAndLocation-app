import React, { useEffect, useState } from 'react'

import styled from 'styled-components';
import { ImLocation, ImSearch } from "react-icons/im";
import axios from 'axios';

import { GetUserLocation } from './GetUserLocation';


const Container = styled.div`
 .cityList {
    width: 100%;
    position: relative;
    margin-top: 1rem;
    
  }
  .city {
    padding: 0.8rem 1rem;
    word-spacing: 0.2rem;
    border-bottom: 0.3px solid lightgray;
  }
  .city:hover {
    cursor: pointer;
  }

`;

const Form = styled.form`
  width: 94%;
  height: 50px;
  display: flex;
  margin:20px auto;
  align-items: center;
  font-size: 1.5rem;
  border-radius: 15px;
  padding: 0.2rem 1rem;
 
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  position: sticky;
  top: 0;
  
  
`;

const Input = styled.input`
 width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
`;
const Button = styled.button`
  border: none;
  background: none;
  outline: none;
  font-size: 1.2rem;
  cursor: pointer;
`;
const Item = styled.div`

:hover{
  font-size: 30px;
  color: gray;
}
`;

export const Search = ({ setCoordinates, coordinates, setLoading }) => {
  

  const currentLocation = () => {
    GetUserLocation(setCoordinates);
    console.log("current")
  };
  
  return (
    <Container>
      <Form >
      <Item style={{ cursor: "pointer" }} onClick={currentLocation} >
          <ImLocation />
        </Item>
        <Input  />
        <Button>
          <Item>
            <ImSearch />
          </Item>
        </Button>
      </Form>
      <GetUserLocation/>

      
  </Container>
  )
}
