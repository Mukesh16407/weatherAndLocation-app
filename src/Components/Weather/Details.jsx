import React from "react";
import { useSelector } from "react-redux";
import sunny from "../../assets/sunny.png";
import rainy from "../../assets/rainy.png";
import cloudy from "../../assets/cloudy.png";
import Chart from "react-apexcharts";
import { SunInfo } from "./SunInfo";
export const Details = ({ dayTemp, current }) => {

  const temp = useSelector((store) => store.temp);

  return (
    <div>
      {temp && (
        <div>
          <div>
            <p>{Math.round(dayTemp.temp - 273)}°C</p>
            <img
              src={
                dayTemp.weather === "Clear"
                  ? sunny
                  : dayTemp.weather === "Clouds"
                  ? cloudy
                  : rainy
              }
              alt={dayTemp.weather}
            />
          </div>
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
          <div>
            <SunInfo current={current}/>
          </div>
        </div>
      )}
    </div>
  );
};
