import React from 'react'
import Dashboard from './Dashboard';
import Ecommerce from './Ecommerce';
import "./view.css"

const View = ({user}) => {
    
    return (
        <div className="view">
            <Dashboard user = {user}/>
            <Ecommerce user = {user}/>
        </div>
    )
}

export default View
