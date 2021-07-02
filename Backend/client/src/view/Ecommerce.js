import React, { useState, useEffect } from "react";
import "./view.css";
import InfluencerSearch from "./InfluencerSearch";
import Pagination from "./Pagination";

const Ecommerce = ({ user, perentFunction, nextFunction }) => {
  const [influencerdata, setInfluencerdata] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(50);
  const [max, setMax] = useState();
  const [min, setMin] = useState();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = influencerdata.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const influencerList = async () => {
    try {
       const res = await fetch("http://localhost:4000/register/accepted", {
        //const res = await fetch("/register/accepted", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setInfluencerdata(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    influencerList();
  }, []);

  function search(currentPosts) {
    return currentPosts.filter(
      (row) =>
        row.firstname.toLowerCase().indexOf(inputSearch) > -1 ||
        row.lastname.toLowerCase().indexOf(inputSearch) > -1 ||
        row.email.toLowerCase().indexOf(inputSearch) > -1 
        // row.Categories.indexOf(inputSearch) > -1 ||
        // row.Language.indexOf(inputSearch) > -1 ||
        // row.youtubeChannel.toLowerCase().indexOf(inputSearch) > -1 ||
        // (row.intVideoPrice > min && row.intVideoPrice < max)
    );
  }

  function search(currentPosts) {
    return currentPosts.filter(
      (row) =>
        row.Categories.indexOf(input) > -1 ||
        row.Language.indexOf(input) > -1 ||
        row.youtubeChannel.toLowerCase().indexOf(input) > -1 ||
        (row.intVideoPrice > min && row.intVideoPrice < max)
    );
  }

  return (
    <div className="e-commerce">
      <div className="heading">{(!user)?"E-COMMERCE":`Welcome ${user.firstname} ${user.lastname}`}</div>
      <div className="all__dropdown">
        <select
          className="Language_filter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        >
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

        <select
          className="categories_selection"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        >
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
        <div>
          <input
            className="pricing_filter"
            type="text"
            placeholder="Min-Price"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
        </div>
        <div>
          <input
            className="pricing_filter"
            type="text"
            placeholder="Max-Price"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>
        <button
          className="pricing_filter"
          value={min <= input <= max}
          onClick={(e) => setInput(e.target.value)}
        >
          Submit
        </button>

        {/* <option defaultValue>Pricing Filter</option>
          <option value={max}>Max-Price</option>
          <option value={min}>Min-Price</option> */}
      </div>
      {!input?"": <div className="pricing_filter">{input}<button style={{marginLeft:"20px",color:"white",border:"none",background:"red"}} onClick={()=>setInput("")}> X </button></div>}
      
      <div className="search__input">
        <input
          placeholder="Search Influencer"
          type="text"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </div>
      <div className="feed">
        <InfluencerSearch perentFunction = {perentFunction} nextFunction={nextFunction} currentPosts={search(currentPosts)} />
      </div>
      <Pagination
        postsPerPage={postsPerPage} 
        totalPosts={influencerdata.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Ecommerce;
