import React, { useEffect, useState } from "react";
import "./view.css";
import ViewMorePopUp from "./ViewMorePopUp";
import Addtocart from './Addtocart';
import axios from 'axios';

const InfluencerFeed = () => {
  const [popup, setPopup] = useState(false);
  const [addto, setAddto] = useState(false);
  const youtubeApi="https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=contentDetails&part=statistics&id=UCbhaEGajTUPAqUe62N8GJmg&key=AIzaSyBoVwvvW80ln1ij9l3a3tP0kRcw8K1bk1M"
  const user = {
    profilePic:
      "http://www.mydeen.org/wp-content/uploads/2018/10/Environment-earth_crop.jpg",
  };

  useEffect(() => {
    axios.get(youtubeApi)
      .then(res => {
        const persons = res.data.items;
        console.log(persons)
      })
  }, [])
  return (
    <>
      <div className="influ__feed">
        <div className="profile">
          <img src={user.profilePic} alt="profile" />
        </div>
        <div className="channel__name">Channal Name</div>
        <div className="channel">
          <div className="youtube__sub">Youtube Subscribers</div>
          <div className="avg__views">Average Views</div>
        </div>
        <div className="int__Vp">Integrated Video Price</div>
        <div className="channel">
        <div className="view__more" onClick={() => setPopup(true)}>
          View More
        </div>
        <div className="view__more" onClick={() => setAddto(true)}>
          Add to Pre/Next month
        </div>
        </div>
        <Addtocart trigger={addto} setTrigger={setAddto}  />
      </div>
      
      <ViewMorePopUp trigger={popup} setTrigger={setPopup} />
    </>
  );
};

export default InfluencerFeed;
