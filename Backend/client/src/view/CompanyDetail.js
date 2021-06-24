import React from 'react'

const CompanyDetail = (props) => {
    return (props.trigger) ? (
        <div className="companyDetail">
            <button className="close__btn fas fa-times-circle" onClick={()=>props.setTrigger(false)}></button> 
            <div className="companny__det">
                <div className="companey">firstname : 
                <span className="bold">Rajdeep</span>
                </div>
                <div className="companey">lastname : 
                <span className="bold">Kumar</span>
                </div>
                <div className="companey">email : 
                <span className="bold">adicube@gmail.com</span>
                </div>
                <div className="companey">mobNumber : 
                <span className="bold">8709460267</span>
                </div>
                <div className="companey">companyName : 
                <span className="bold">Adicube</span>
                </div>
                <div className="companey">campaignBudget : 
                <span className="bold">500,000</span>
                </div>
                <div className="companey">Intagram followers : 
                <span className="bold">521K</span>
                </div>
                <div className="companey">launchTiming : 
                <span className="bold">27/06/2021</span>
                </div>
                <div className="companey">loginId : 
                <span className="bold">rajdeep@gmail.com</span>
                </div>
                <div className="companey">password : 
                <span className="bold">1234567</span>
                </div>
                <button className="update__btn" >Update</button>
                
            </div>

            
        </div>
    ) : "";
}

export default CompanyDetail
