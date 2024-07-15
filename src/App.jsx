import React, { useEffect, useMemo, useState } from "react";
import './app.css';
import Quiz from "./components/Quiz";
import { data } from "./data";
import Timer from "./components/Timer";
import Start from "./components/Start";
//pokrecem aplikaciju: npm start

function App() {
  const [userName,setUserName]=useState(null);

  const [brojPitanja,setBrojPitanja]= useState(1); //da bude active u klasi
  const [stop,setStop]= useState(false);//kad dodje do 30 postace true i znaci da smo izgubili
//stop cu isto da koristim za netacne odgovore jer sam tad izgubila

  const [zaradjenNovac,setZaradjenNovac]=useState("0 RSD");
  const moneyPyramid = useMemo(()=>[
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
  ].reverse()
  ,[]);

  useEffect(()=>{
    //ako sam na 3. pitanju ne treba da imam 3000 nego 2000
    brojPitanja>1 && setZaradjenNovac(moneyPyramid.find(m=>m.id === brojPitanja-1).amount)
  },[moneyPyramid,brojPitanja]);
  return (
    <div className="App">
      {userName? (<>
        <div className="main">
        {stop ? <h1 className="endtext">Zaradili ste: {zaradjenNovac}</h1>: (
        <>
        <div className="top">
          <div className="timer">
          <Timer setStop={setStop} brojPitanja={brojPitanja} />
          </div>
        </div>
        <div className="bottom">
          <Quiz data={data} setStop={setStop} setBrojPitanja={setBrojPitanja} brojPitanja={brojPitanja}/>
        </div>
      </>)}
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
      </>): <Start setUserName={setUserName}/> }
      
    </div>
  );
}

export default App;
