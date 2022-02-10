/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  let date = new Date();
  let time = new Date().toLocaleTimeString();
  const [ctime, settime] = useState(time);
  let upsec = date.getSeconds();
  let bar = date.getDay();
  let month = date.getMonth();
  let dat = date.getDate();
  let year = date.getFullYear();

  setInterval(() => {
    let time = new Date().toLocaleTimeString();
    settime(time);
  }, 1000);

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June ",
    "July",
    "Augest",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="App">
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <h1 className="head zori">Galib Clock</h1>
      <div className="contain">
        <p className="zori">
          {day[bar]}
          <br></br>
          {dat} {months[month]}
          <br></br>
          {year}
        </p>
        <h1 className="zori">{ctime}</h1>
      </div>
    </div>
  );
}

export default App;
