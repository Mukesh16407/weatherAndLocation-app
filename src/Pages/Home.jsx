import React, { useState } from 'react';

import {Search} from '../Components/Search'
import styled from 'styled-components'


const Container = styled.div`
 width: 30%;
 height: 95vh;
 background-color:white;
 border-radius: 20px;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Wrapper = styled.div`
 
  
`;

const Box = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h2`
  color: black;
  text-align: center;
  padding: 0.5rem;
`;


export const Home = () => {
  const [coordinates, setCoordinates] = useState({});
  const [dayTemp, setDayTemp] = useState({});
  const [current, setCurrent] = useState({});
  const [loading, setLoading] = useState(false);
  return (
    <Container>
      <Search  setLoading={setLoading}
      setCoordinates={setCoordinates}
      coordinates={coordinates} />
      
      <Wrapper>
      
      </Wrapper>
    </Container>
  )
}
