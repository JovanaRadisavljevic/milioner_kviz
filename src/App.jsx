import React, { useState } from "react";
import './app.css';
import Quiz from "./components/Quiz";
//pokrecem aplikaciju: npm start

function App() {

  const [brojPitanja,setBrojPitanja]= useState(1); //da bude active u klasi

  const moneyPyramid = [
    {id:1, amount:"RSD 1000"},
    {id:2, amount:"RSD 2000"},
    {id:3, amount:"RSD 3000"},
    {id:4, amount:"RSD 4000"},
    {id:5, amount:"RSD 5000"},
    {id:6, amount:"RSD 10000"},
    {id:7, amount:"RSD 50000"},
    {id:8, amount:"RSD 100000"},
    {id:9, amount:"RSD 200000"},
    {id:10, amount:"RSD 300000"},
    {id:11, amount:"RSD 500000"},
    {id:12, amount:"RSD 600000"},
    {id:13, amount:"RSD 700000"},
    {id:14, amount:"RSD 800000"},
    {id:15, amount:"RSD 1000000"}
  ].reverse();

  return (
    <div className="App">
      <div className="main">
        <div className="top">
          <div className="timer">30s</div>
        </div>
        <div className="bottom">
          <Quiz />
        </div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m)=>(
            <li className={brojPitanja===m.id? "moneyListItem active": "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
          ))}
        </ul>
        </div>
    </div>
  );
}

export default App;
