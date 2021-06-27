import React from 'react'

const ViewMorePopUp = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <button className="close__btn fas fa-times-circle" onClick={()=>props.setTrigger(false)}></button> 
            <div className="view__moreContant">
                <div className="info">YouTube Subscribers</div>
                <div className="info">Average Views</div>
                <div className="info">Visit YouTube Channel</div>
                <div className="info">Integrated Video Price:<span className="bold">{props.influencerdata.intVideoPrice}</span></div>
                <div className="info">Dedicated Video Price : <span className="bold">{props.influencerdata.dediVideoPrice}</span></div>
                <div className="info">Pre-Roll Price : <span className="bold">{props.influencerdata.preRolPrice}</span></div>
                <div className="info">Intagram followers</div>
                <div className="info">Engagement Ratio</div>
                <div className="info">Visit Instagram channel</div>
                <div className="info">Story Price :<span className="bold">{props.influencerdata.storePrice}</span></div>
                <div className="info">Reel Price :<span className="bold">{props.influencerdata.reelPrice}</span></div>
                <div className="info">Post Price :<span className="bold">{props.influencerdata.postPrice}</span></div>
            </div>

            
        </div>
    ) : "";
}

export default ViewMorePopUp