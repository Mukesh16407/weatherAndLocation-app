import React from 'react'
import styled from 'styled-components';
import { Search } from '../Components/Search';


export const Home = () => {

  
  return (
    <Container>
       <Search/>
      <Box>
        seven day weather
      </Box>
      <Wrapper>
        <TemperatureBox>
          temperature
        </TemperatureBox>
        <LinearGraph>
          Graph
        </LinearGraph>
        <ExtraData>
          Data
        </ExtraData>
        <ParaBolicGraph>
          Parabolic Graph
        </ParaBolicGraph>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
       
  min-width: 450px;
  min-height: 720px;
  background-color: white;
  border-radius: 20px;
  border:1px solid red;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  
`
const Wrapper = styled.div`
   margin: 12px;
   padding: 7px;
    min-height: 72%;
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;


const Box = styled.div`
  border:1px solid red;
   margin: 12px;
    height: 110px;
    padding: 5px;
    display:flex;
    justify-content:space-evenly;
`

const TemperatureBox = styled.div`
    border:1px solid green;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 8px;
    height: 75px;
   
`;
const LinearGraph = styled.div`
border: 1px solid blue;
    width: 97%;
    height: 160px;
    margin: auto;
`;
const ExtraData = styled.div`
  border:1px solid red;
   display: flex;
    flex-direction: column;
    height: 120px;
    margin: 5px 7px 5px 7px;
`;
const ParaBolicGraph = styled.div`
 border: 1px solid brown;
    width: 96.5%;
    height: 130px;
    margin: auto;
    padding: 5px;
`
