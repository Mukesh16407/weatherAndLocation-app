import React, { useEffect, useState } from "react";

export const SunInfo = ({ current }) => {
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  useEffect(() => {
    let sunrise = current.sunrise;
    let sunRiseTime = new Date(sunrise * 1000);
    setSunrise(sunRiseTime.toLocaleTimeString());

    let sunset = current.sunset;
    let sunSettime = new Date(sunset * 1000);
    setSunset(sunSettime.toLocaleTimeString());
  }, [current]);

  console.log(sunrise, sunset);
  return (
    <div>
      <div>
        <div>
          <p state="title">Pressure</p>
          <p>{current.pressure}pa</p>
        </div>
        <div>
          <p state="title">Humidity</p>
          <p>{current.humidity} %</p>
        </div>
      </div>
      <div>
      <div>
          <p state="title">Sunrise</p>
          <p>{sunrise}</p>
        </div>
        <div>
          <p state="title">Sunset</p>
          <p>{sunset}</p>
        </div>
      </div>
    </div>
  );
};
