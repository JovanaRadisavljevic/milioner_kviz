import React, { useEffect, useState } from 'react'

export default function Timer({setStop,brojPitanja}) {
    const [timer,setTimer]=useState(30);
    useEffect(()=>{
        if(timer === 0) return setStop(true); //ako je tajmer 0 onda je stop true i treba da se ispise koliko smo zaradili
        const interval= setInterval(()=>{
            setTimer(prev=>prev-1);
            //svake sekunde smanji tajmer za 1
        },1000);
        return ()=> clearInterval(interval) //treba da se ocisti interval kad se krene na novo pitanje
    },[setStop,timer]);

    useEffect(()=>{
        setTimer(30);
    },[brojPitanja]);//svaki put kad se promeni pitanej resetuje se tajmer na 30s
  return timer;
}
