import React from 'react'
import styled from 'styled-components';
import { ImLocation, ImSearch } from "react-icons/im";

export const Home = () => {

  const Container = styled.div`
       
  min-width: 450px;
  min-height: 600px;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  
`
const Wrapper = styled.div``;

const StyleContainer = styled.div`
 border: 1px solid red;
 margin: 15px;
 height: 50px;
 display: flex;
 justify-content: space-around;
 align-items: center;
 border-radius: 12px;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`
const Input = styled.input`
width: 80%;
height: 98%;
`
const Box = styled.div``

const TemperatureBox = styled.div``;
const LinearGraph = styled.div``;
const ExtraData = styled.div``;
const ParaBolicGraph = styled.div``
  return (
    <Container>
      <StyleContainer>
      <ImLocation />
      <Input/>
      <ImSearch/>
      </StyleContainer>
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
