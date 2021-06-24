import React from 'react'

const ViewMorePopUp = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <button className="close__btn fas fa-times-circle" onClick={()=>props.setTrigger(false)}></button> 
            <div className="view__moreContant">
                <div className="info">YouTube Subscribers</div>
                <div className="info">Average Views</div>
                <div className="info">Visit YouTube Channel</div>
                <div className="info">Integrated Video Price</div>
                <div className="info">Dedicated Video Price</div>
                <div className="info">Pre-Roll Price</div>
                <div className="info">Intagram followers</div>
                <div className="info">Engagement Ratio</div>
                <div className="info">Visit Instagram channel</div>
                <div className="info">Story Price</div>
                <div className="info">Reel Price</div>
                <div className="info">Post Price</div>
            </div>

            
        </div>
    ) : "";
}

export default ViewMorePopUp
