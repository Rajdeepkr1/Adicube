import React from 'react'

const CompanyDetail = (props) => {

    return (props.trigger) ? (
        <div className="companyDetail">
            <button className="close__btn fas fa-times-circle" onClick={()=>props.setTrigger(false)}></button> 
            <div className="companny__det">
                <div className="companey">firstname : 
                <span className="company__detailStyle">{props.user.firstname}</span>
                </div>
                <div className="companey">lastname : 
                <span className="company__detailStyle">{props.user.lastname}</span>
                </div>
                <div className="companey">email : 
                <span className="company__detailStyle">{props.user.email}</span>
                </div>
                <div className="companey">mobNumber : 
                <span className="company__detailStyle">{props.user.number}</span>
                </div>
                <div className="companey">companyName : 
                <span className="company__detailStyle">{props.user.companyName}</span>
                </div>
                <div className="companey">campaignBudget : 
                <span className="company__detailStyle">{props.user.campaignBudget}</span>
                </div>
                {/* <div className="companey">Intagram followers : 
                <span className="company__detailStyle">{props.user[0].companyName}</span>
                </div> */}
                <div className="companey">launchTiming : 
                <span className="company__detailStyle">{props.user.launchTiming}</span>
                </div>
                <div className="companey">loginId : 
                <span className="company__detailStyle">{props.user.loginId}</span>
                </div>
                <div className="companey">password : 
                <span className="company__detailStyle">####</span>
                </div>
                <button className="update__btn" >Update</button>
                
            </div>

            
        </div>
    ) : "";
}

export default CompanyDetail
