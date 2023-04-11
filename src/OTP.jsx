import React, { isValidElement, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function OTP() {

   const [counter,  setCounter ]= React.useState(30);
   React.useEffect(()=>{
    const timer = 
    counter > 0 && setInterval(()=> setCounter(counter - 1),1000);
    return()=> clearInterval(timer);
   },[counter]);


   const navigate = useNavigate();
   function move() {
            
    const validates = document.getElementById("checkotp").value;
    if(validates == '9999'){
        navigate('/List')
    }else{
        alert("enter a correct OTP")
    }
       
   } 
    return (
        <div className='OTP'>
            <h1>
                Enter OTP
            </h1>
            <p className='OTP p1'>We have Sent a one time password (OTP) to Given Number</p>

            <input id='checkotp' className="content-input" placeholder="Enter OTP" required/><br></br>
            <p>Resend OTP in <span id='countertime'>00.{counter}</span> </p>

           <button onClick={(e)=>move()} className="content-button">Submit</button>
        </div>
    )
}

export default OTP