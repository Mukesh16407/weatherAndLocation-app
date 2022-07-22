import React, { useState } from 'react'

import styled from 'styled-components';
import { ImLocation, ImSearch } from "react-icons/im";
import {cities} from '../Data/Cities';
import { CityList } from './CityList';
import {Coordinates} from '../Location/DefaultLocation';


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

export const Search = () => {

  const [searchData, setSearchData] = useState([]);
  const [city, setCity] = useState("");
  const [show, setShow] = useState(true);


  let keyWeather="dd7fa73e412e7d4b26a84b058a427602";
  let id;
  return (
    <Container>
      <Form>
      <Item style={{ cursor: "pointer" }}>
          <ImLocation />
        </Item>
        <Input/>
        <Button>
          <Item>
            <ImSearch />
          </Item>
        </Button>
      </Form>

    
  </Container>
  )
}
