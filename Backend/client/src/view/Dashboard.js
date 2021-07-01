import React, { useState } from 'react'
import "./view.css"
import CompanyDetail from './CompanyDetail';
import PresentMonth from './PresentMonth';
import NextMonth from './NextMonth';

const Dashboard = ({user, presentMonth, nextMonth}) => {
    const [companyDetail, setCompanyDetail] = useState(false);
    const [presentMon, setPresentMon] = useState(false);
    const [nexMonth, setNexMonth] = useState(false);
    
    return (
        <>
        <div className="dashboard">
            <div className="heading"style={{marginBottom:10}}>DASH-BOARD</div>
            <button className="company__detail" onClick={() => setCompanyDetail(true)}>Company Details</button>
            <CompanyDetail user={user} trigger={companyDetail} setTrigger={setCompanyDetail}/>
            <button className="influ__sel__present" onClick={() => setPresentMon(true)}>Influencer selected for the present month</button>
            <PresentMonth presentMonth={presentMonth} trigger={presentMon} setTrigger={setPresentMon}/>
            <button className="influ__sel__Next" onClick={() => setNexMonth(true)}>Influencer selected for the Next month</button>
            <NextMonth nextMonth={nextMonth} trigger={nexMonth} setTrigger={setNexMonth}/>
        </div>
        </>
    )
}

export default Dashboard
