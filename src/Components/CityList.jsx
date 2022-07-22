import React from 'react'





export const CityList = ({ city, state }) => {
    return (
      <>
        <div className="city" data-aos="fade-up">
          <h4 style={{ color: "#364758", fontSize: "14px" }}>
            {city},{" "}
            <span
              style={{ color: "#9ba3ac", fontWeight: "200", fontSize: "14px" }}
            >
              {state}
            </span>{" "}
          </h4>
        </div>
      </>
    );
  };
 