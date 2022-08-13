import React from "react";
import { useSelector } from "react-redux";
import sunny from "../../assets/sunny.png";
import rainy from "../../assets/rainy.png";
import cloudy from "../../assets/cloudy.png";
import Chart from "react-apexcharts";
import { SunInfo } from "./SunInfo";
import styled from "styled-components";
export const Details = ({ dayTemp, current }) => {

  const temp = useSelector((store) => store.temp);

  return (
    <>
      {temp && (
        <Wrapper>
          <Box>
            <Title>{Math.round(dayTemp.temp - 273)}°C</Title>
            <Logo
              src={
                dayTemp.weather === "Clouds"
                  ? cloudy
                  : dayTemp.weather === "Clear"
                  ? sunny
                  : rainy
              }
              alt={dayTemp.weather}
            />
          </Box>
          <div>
            <Chart
              type="line"
              width="98%"
              height="98%"
              series={[
                {
                  name: "Temperature",
                  data: temp,
                },
              ]}
              options={{
                xaxis: {
                  categories: ["9am", "12pm", "3pm", "6pm"],
                },
                yaxis: {
                  title: { text: "temp in K" },
                },
              }}
            ></Chart>
          </div>
            <SunInfo current={current}/>
          
        </Wrapper>
      )}
    </>
  );
};


const Wrapper = styled.div`
   border-radius: 0.5rem;
  padding: 0.5rem 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`
const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem;
`
const Title= styled.h1`
  color: black;
  font-weight:800;
  font-size: 3rem;
  margin-left: 2.5rem;
  
`
const Logo = styled.img`
  height: 3rem;
  width: 3rem;
`;