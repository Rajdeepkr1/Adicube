import React from "react";
import "./view.css";
import InfluencerFeed from "./InfluencerFeed";
const InfluencerSearch = ({ currentPosts, perentFunction, nextFunction }) => {
  return (
    <div className="feed">
      {currentPosts.map((data, index) => (
        <div key={index}>
          <InfluencerFeed perentFunction={perentFunction} nextFunction={nextFunction} influencerdata={data} />
        </div>
      ))}
    </div>
  );
};

 export default InfluencerSearch;
