import React, { useState, useEffect } from "react";
import "./view.css";
import ViewMorePopUp from "./ViewMorePopUp";
import Addtocart from './Addtocart';

const InfluencerFeed = ({influencerdata, perentFunction, nextFunction}) => {
  const [popup, setPopup] = useState(false);
  const [addto, setAddto] = useState(false);
  const [posts, setPosts] = useState([]);

  const PublicFolder = "http://localhost:4000/images/"

  // const user = {
  //   profilePic:
  //     "http://www.mydeen.org/wp-content/uploads/2018/10/Environment-earth_crop.jpg",
  // };
  
  const youtubeApi="https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=contentDetails&part=statistics&id=UCJrOtniJ0-NWz37R30urifQ&key=AIzaSyBoVwvvW80ln1ij9l3a3tP0kRcw8K1bk1M"
  
    const youtube = async (e) => {
    try {
      const res = await fetch(youtubeApi, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    youtube();
  },[])

  return (
    <> 
      <div  className="influ__feed">
        <div className="profile">
          <img src={PublicFolder +influencerdata.profilePic} alt="profile" />
        </div>
        <div className="channel__name"><span className="bold" style={{fontSize:"20px"}}>{influencerdata.firstname} {influencerdata.lastname} </span></div>
        <div className="channel__name">Y-channel :<span className="bold" style={{fontSize:"20px"}}> {posts.length===0 ?"" :posts.items[0].snippet.title}</span></div>
        
        <div className="channel">
          <div className="youtube__sub">Youtube Subscribers : <span className="bold">
            {posts.length===0 ?"" :posts.items[0].statistics.subscriberCount}
            </span></div>
          
          <div className="avg__views">Average Views : <span className="bold">
            {posts.length===0 ?"": (posts.items[0].statistics.viewCount/posts.items[0].statistics.videoCount).toFixed(2)}
            </span></div>
        </div>
        <div className="int__Vp">Integrated Video Price : <span className="bold">
          {influencerdata.intVideoPrice}
          </span>
        </div>
        <div className="channel">
          <div className="view__more" onClick={() => setPopup(true)}>
            View More
          </div>
          <div className="view__more" onClick={() => setAddto(true)}>
            Add to Pre/Next month
          </div>
        </div>
        <Addtocart influencerdata={influencerdata} nextFunction={nextFunction} perentFunction={perentFunction} trigger={addto} setTrigger={setAddto}  />
      </div>
      <ViewMorePopUp posts= {posts} influencerdata={influencerdata} trigger={popup} setTrigger={setPopup} />
    </>
  );
};

export default InfluencerFeed;