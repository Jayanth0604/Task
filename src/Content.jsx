import React, { useState } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";



// export const getStaticProps: GetStaticProps =async (context) =>{
// const client  = new MongoClient("mongodb+srv://kumarjayanth473:VRLxAaeHbujFzuHH@cluster0.yvh0jxl.mongodb.net/Numbers?retryWrites=true&w=majority")


// const data = await client.db().collection('Numbers').find({}).toArray();
// console.log('!!!',data)


//  }
 function Content() {
const navigate = useNavigate();

function handleClick() {


    const validate = document.getElementById("mobile").value;
    if (validate == '') {
        alert("Input cannot be Empty")
    } else {
        navigate('/OTP')
    }


}




    return (<div className="content">
        <h1 >Get Started</h1>
        <div className="content1">
            <input id="mobile" className="content-input" placeholder="Mobile/Email" /><br></br>

            <button id="check" onClick={(e) => handleClick()} className="content-button" type="submit">Continue</button>

            <br>
            </br>
            <p>Or Continue with </p>
        </div>
        <div className="SS">
            <div className="ss-photo">
                <img className="SS1" src="https://static.whatsapp.net/rsrc.php/v3/yR/r/y8-PTBaP90a.png" alt="image Missing"></img>
            </div>
            <div className="ss-photo1">
            </div>
            <img className="SS2" src="https://techcrunch.com/wp-content/uploads/2015/10/screen-shot-2015-10-08-at-4-20-16-pm.png" alt="image Missing"></img>
            <p>By Continuing, you agree to our <span>terms</span> and <span>policies</span></p>
        </div>
    </div>)
} export default Content