import React, { useState } from 'react';
import "./inputform.css";
import axios from 'axios';

const InputForm = () => {
    const [inputData, setInputData] = useState({});
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();
    const [companyName, setCompanyName] = useState();
    const [campaignBudget, setCampaignBudget] = useState();
    const [launchTiming, setLaunchTiming] = useState();
    const [loginId, setLoginId] = useState();
    const [password, setPassword] = useState();

    const onSubmit = (e) =>{
        e.preventDefault();

        setInputData({
            Firstname : firstname,
            lastname : lastname,
            email: email,
            number: number,
            CompanyName: companyName,
            CampaignBudget : campaignBudget,
            LaunchTiming : launchTiming,
            LoginId : loginId,
            password : password
        })
        axios.post("http://localhost:4000", inputData)
        .then(res =>console.log("Data Saved"))
    }
    console.log(inputData);

    return (
        <div action='/' className="input__form">
            <div className="input__box">
                <button className="form__box" name="" type="text"  >Pricing (popup)</button>
                <button className="form__box" name="" type="text" >Case Studies(popup)</button>
            </div>
            <div className="input__box">
                <input className="formbox" onChange={(e)=>setFirstname(e.target.value)} name="firstname" type="text" placeholder="First Name" />
                <input className="formbox" onChange={(e)=>setLastname(e.target.value)} name="lastname" type="text" placeholder="Last Name" />
            </div>
            <div className="input__box">
                <input className="form_box" onChange={(e)=>setEmail(e.target.value)} name="email" type="email" placeholder="Office E-mail address"/>
            </div>
            <div className="input__box">
                <input className="formbox" onChange={(e)=>setNumber(e.target.value)} name="number" type="text" placeholder="Mobile Number" />
                <input className="formbox" onChange={(e)=>setCompanyName(e.target.value)} name="companyName" type="text" placeholder="Company Name" />
            </div>
            <div className="input__box">
                <input className="formbox" onChange={(e)=>setCampaignBudget(e.target.value)} name="campaignBudget" type="text" placeholder="Campaign Budget" />
                <input className="formbox" onChange={(e)=>setLaunchTiming(e.target.value)} name="launchTiming" type="text" placeholder="Launch Timing"/>
            </div>
            <div className="input__box">
                <input className="formbox" onChange={(e)=>setLoginId(e.target.value)} name="loginId" type="email" placeholder="Login ID"/>
                <input className="formbox" onChange={(e)=>setPassword(e.target.value)} name="password" type="password" placeholder="Login Password"/>
            </div>
            <button className="formbox" onClick={onSubmit} style={{backgroundColor:"orange"}}>Submit</button>
            
        </div>
    )
}

export default InputForm
