import React, { useState } from "react";
import styled from "styled-components";
import { Day } from "./Day";
import { Details } from "./Details";
import { Search } from "./Search";
import Loading from "../../assets/Loading_icon.gif";
export const Weather = () => {
  const [city, setCity] = useState("");
  const [coordinates, setCoordinates] = useState({});
  const [dayTemp, setDayTemp] = useState({});
  const [current, setCurrent] = useState({});
  const [loading, setLoading] = useState(false);
  return (
    <Container>
      <Search
        setLoading={setLoading}
        setCity={setCity}
        city={city}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />
      {loading ? (
        <Box>
          <Image src={Loading} alt="loading" />
          <Title>No City Found! Turn on the location</Title>
        </Box>
      ) : !coordinates.lat ? (
        <Box>
          <Image src={Loading} alt="loading" />
          <Title>No City Found! Turn on the location</Title>
        </Box>
      ) : (
        <Wrapper>
          <Day
            coordinates={coordinates}
            setDayTemp={setDayTemp}
            setCurrent={setCurrent}
          />
          <Details dayTemp={dayTemp} current={current} />
        </Wrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 35%;
  min-width: 35%;
  min-height: 95vh;
  max-width: 95vh;
  border-radius: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  background: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border: 1px solid red;

  @media screen and (max-width: 768px) {
    max-width: 80%;
    min-width: 80%;
    margin: auto;
    min-height: 95vh;
    margin-top: 1rem;
  }

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;
const Wrapper = styled.div``;
const Box = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  margin-top: 10%;
`;

const Title = styled.h2`
  color: black;
  text-align: center;
  padding: 0.5rem;
`;
