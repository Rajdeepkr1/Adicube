import React from 'react'
import Dashboard from './Dashboard';
import Ecommerce from './Ecommerce';
import "./view.css"

const View = () => {
    return (
        <div className="view">
            <Dashboard/>
            <Ecommerce/>
        </div>
    )
}

export default View
