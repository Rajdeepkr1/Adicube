import React from "react";
import "./view.css";
import InfluencerFeed from "./InfluencerFeed";
const InfluencerSearch = ({ currentPosts }) => {
  return (
    <div className="feed">
      {currentPosts.map((data, index) => (
        <div key={index}>
          <InfluencerFeed influencerdata={data} />
        </div>
      ))}
    </div>
  );
};

 export default InfluencerSearch;
