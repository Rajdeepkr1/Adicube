import React, { useEffect, useState } from "react";
import "./view.css";
import ViewMorePopUp from "./ViewMorePopUp";
import Addtocart from './Addtocart';
import axios from 'axios';




const InfluencerFeed = ({influencerdata}) => {
  const [posts, setPosts] = useState([]);
  const [popup, setPopup] = useState(false);
  const [addto, setAddto] = useState(false);
  const user = {
    profilePic:
      "http://www.mydeen.org/wp-content/uploads/2018/10/Environment-earth_crop.jpg",
  };

  const youtubeApi="https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=contentDetails&part=statistics&id=UCq-Fj5jknLsUf-MWSy4_brA&key=AIzaSyBoVwvvW80ln1ij9l3a3tP0kRcw8K1bk1M"

  useEffect(() => {
    axios.get(youtubeApi)
      .then(res => {
        const persons = res.data.items[0];
        setPosts(persons);
      })
  }, [])

 
  
 console.log(posts)
  
  return (
    <> 
      
      {/* {influencerdata.map(post => ( */}
      <div  className="influ__feed">
        <div className="profile">
          <img src={user.profilePic} alt="profile" />
        </div>
        <div className="channel__name"><span className="bold" style={{fontSize:"20px"}}>Name Of Youtube channel</span></div>
        {/* {post.snippet.title} */}
        <div className="channel">
          <div className="youtube__sub">Youtube Subscribers : <span className="bold"></span></div>
          {/* {post.statistics.subscriberCount} */}
          <div className="avg__views">Average Views : <span className="bold"></span></div>
          {/* {post.statistics.viewCount} */}
        </div>
        <div className="int__Vp">Integrated Video Price : <span className="bold">{influencerdata.intVideoPrice}</span></div>
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
      
      {/* ))} */}
      <ViewMorePopUp influencerdata={influencerdata}trigger={popup} setTrigger={setPopup} />
      
      
      
    </>
  );
};

export default InfluencerFeed;
