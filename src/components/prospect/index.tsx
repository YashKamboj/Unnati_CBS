import React from 'react'
import INTRO1 from "../../../intro1.png";
import INTRO2 from "../../../intro2.png";
import INTRO3 from "../../../intro3.png";
import INTRO4 from "../../../intro4.png";

const Prospects = () => {
  return (
    <div className='justify-center' style={{display: "flex" }}>
        <div className="text-center font-sans text-l m-8" style={{display: "flex", gap: "1rem", backgroundColor: "#FFFFFF"}}>
        <img src={INTRO1} style={{width:"3rem", height:"3rem"}}/>
        <h3>100% Secure Payment</h3>
        </div>
        <div className="text-center font-sans text-l m-8" style={{display: "flex", gap: "1rem", backgroundColor: "#FFFFFF"}}>
        <img src={INTRO2} style={{width:"3rem", height:"3rem"}}/>   
        <h3>0 Hidden Costs</h3>
        </div>
        <div className="text-center font-sans text-l m-8" style={{display: "flex", gap: "1rem", backgroundColor: "#FFFFFF" }}>
        <img src={INTRO3} style={{width:"3rem", height:"3rem"}}/>  
        <h3>Diverse Causes</h3>  
        </div>
        <div className="text-center font-sans text-l m-8" style={{display: "flex", gap: "1rem", backgroundColor: "#FFFFFF"}}>
        <img src={INTRO4} style={{width:"3rem", height:"3rem"}}/>  
        <h3>East to use and User Friendly</h3>    
        </div>
    </div>
  )
}

export default Prospects