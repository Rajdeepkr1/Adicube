import React from "react";
import { Link } from "react-router-dom";
import "./brand.css";
import Card from "./Card";

const Brand = () => {
  return (
    <div className="brand">
      <Link to="/BrandLogin" style={{textDecoration:"none",fontWeight:'bold'}}>
        <div className="brand__login">Brand Login</div>
      </Link>
      <p className="text"style={{color:'white',fontWeight:'bold'}}>Top Brands that trust us</p>
      <div className="card__box">
        <Card  imageOfcleb="https://www.mirchi9.com/wp-content/uploads/2017/06/Allu-Arjun-Duvvada-Jagannadham-Touching-Burning-Topic-in-Telugu-States-1.jpg"/>
        <Card imageOfcleb="http://www.mydeen.org/wp-content/uploads/2018/10/Environment-earth_crop.jpg"/>
        <Card imageOfcleb="https://cdn.shopify.com/s/files/1/1003/7610/products/Black_horse_run_gallop_in_dust_desert_Wallpaper_Mural_d_1400x.jpg?v=1584964196"/>
      </div>
    </div>
  );
};

export default Brand;
