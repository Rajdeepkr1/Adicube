import React from "react";
import "./view.css";
import InfluencerFeed from "./InfluencerFeed";

const Ecommerce = () => {
  return (
    <div className="e-commerce">
      <div className="heading">E-COMMERCE</div>
      <div className="all__dropdown">
        <select className="Language_filter">
          <option defaultValue>Language filter dropdown</option>
          <option value="Hindi">Hindi</option>
          <option value="Tamil">Tamil</option>
          <option value="Odia">Odia</option>
          <option value="Marathi">Marathi</option>
          <option value="Telugu">Telugu</option>
          <option value="Malayalam">Malayalam</option>
          <option value="Gujrati">Gujrati</option>
          <option value="Bhojpuri">Bhojpuri</option>
          <option value="English">English</option>
          <option value="Haryanvi">Haryanvi</option>
          <option value="Bengali">Bengali</option>
        </select>

        <select className="categories_selection">
          Category selection dropdown
          <option defaultValue>Category selection dropdown</option>
          <option value="Travel">Travel</option>
          <option value="Gaming">Gaming</option>
          <option value="Roasts">Roasts</option>
          <option value="Vines">Vines</option>
          <option value="Pranks">Pranks</option>
          <option value="Motivation">Motivation</option>
          <option value="News">News</option>
          <option value="Moto-Vlogs">Moto-Vlogs</option>
          <option value="Beauty">Beauty</option>
          <option value="Vlogs">Vlogs</option>
          <option value="Finance">Finance</option>
          <option value="Technology">Technology</option>
          <option value="Experiment">Experiment</option>
          <option value="Health and Fitness">Health and Fitness</option>
          <option value="Music">Music</option>
        </select>

        <select className="pricing_filter">
          <option defaultValue>Pricing Filter</option>
          <option value="Max">Max-Price</option>
          <option value="Avg">Avg-Price</option>
          <option value="Min">Min-Price</option>
        </select>
      </div>
      <div className="search__input">
        <input placeholder="Search Influencer" type="text" />
      </div>
      <div className="feed">
        <InfluencerFeed />
        <InfluencerFeed />
        <InfluencerFeed />
        <InfluencerFeed />
        <InfluencerFeed />
        <InfluencerFeed />
        <InfluencerFeed />
        <InfluencerFeed />
        <InfluencerFeed />
        <InfluencerFeed />
        <InfluencerFeed />
        <InfluencerFeed />
      </div>
    </div>
  );
};

export default Ecommerce;