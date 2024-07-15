import React, { useEffect, useState } from "react";
import '../app.css';

export default function Quiz({data,setStop,setBrojPitanja,brojPitanja}){
    const [pitanje,setPitanje]=useState(null);
    const [selektovanOdgovor,setSelektovanOdgovor]=useState(null);
    const [className,setClassName]=useState("odgovor");
    useEffect(()=>{
        //broj pitanja pocinje od 1 ali niz pocinje od 0 pa mora -1
        setPitanje(data[brojPitanja-1]);
    },[data,brojPitanja]) //kad god dodje do promene neke od ove dve varijable izvrsice se useEffect
    
    const delay = (duration, callback) => {
        setTimeout(()=>{
            callback();
        },duration);
    };

    const handleClick = (o) => {
        setSelektovanOdgovor(o);
        setClassName("odgovor active");
        //prvi delay ce da run-uje animacije 
        delay(3000,()=>
            setClassName(o.correct? "odgovor correct": "odgovor wrong")
        );
        delay(6000,()=>
            {
                if(o.correct){
                    setBrojPitanja(prev=>prev+1);
                    setSelektovanOdgovor(null);//jer ide novo pitanje
                }else{
                    setStop(true);
                }
            }
        );
    }
    return(
        <div className="quiz">
            <div className="pitanje">{pitanje?.pitanje}</div>
            <div className="odgovori">
                {pitanje?.odgovori.map((o)=>(
                    <div className={selektovanOdgovor === o ? className : "odgovor"} onClick={()=>handleClick(o)}>{o.text}</div>
                ))}
            </div>
        </div>
    )
}