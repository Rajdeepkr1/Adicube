import React, { useState } from "react";
import Dashboard from './Dashboard';
import Ecommerce from './Ecommerce';
import "./view.css"

const View = ({user}) => {

    const [presentMonth, setPresentMonth] = useState([])
    const [nextMonth, setNextMonth] = useState([])
    
    const perentFunction = async(data)=>{
        try {
            const res = await fetch(`http://localhost:4000/register/${data}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            });
            const user = await res.json();
            const copy = [...presentMonth, user]
            setPresentMonth(copy);
        } 
        catch (err) {
            console.log(err);
        }    
    }

    const nextFunction = async(data)=>{
        try {
            const res = await fetch(`http://localhost:4000/register/${data}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            });
            const user = await res.json();
            const copy = [...nextMonth, user]
            setNextMonth(copy);
        } 
        catch (err) {
            console.log(err);
        }    
    }
    
    return (
        <div className="view">
            <Dashboard presentMonth={presentMonth} nextMonth={nextMonth} user = {user}/>
            <Ecommerce perentFunction={perentFunction} nextFunction={nextFunction} user = {user}/>
        </div>
    )
}

export default View
