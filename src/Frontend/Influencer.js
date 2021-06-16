import React from "react";
import Card from "./Card";
import "./influencer.css";
import { Link } from "react-router-dom";

const Influencer = () => {
  return (
    
      <div className="influencer">
        <Link to="/InfluencerAccess"style={{textDecoration:"none",fontWeight:'bold'}}>
          <div className="influencer__Access">Influencer Access</div>
        </Link>

        <p className="text" style={{color:'white',fontWeight:'bold'}}>Top Influencer working with us</p>
        <div className="card__box">
          <Card imageOfcleb="https://images.unsplash.com/photo-1438109491414-7198515b166b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4MjYyNDYwfHxlbnwwfHx8fA%3D%3D&w=1000&q=80"/>
          <Card imageOfcleb="https://i.insider.com/5d321d4ea209d3146d650b4a?width=700"/>
          <Card imageOfcleb="https://i2.wp.com/www.alphr.com/wp-content/uploads/2018/04/how_to_back_up_photos_on_google_photos.jpg?resize=751%2C563&ssl=1"/>
        </div>
      </div>
    
  );
};

export default Influencer;
