import React, { useState } from "react";
import Header from "./Header";
import Select from "react-select";
import "./Header.css";

const Language = [
  { label: "Hindi", value: "Hindi" },
  { label: "Tamil", value: "Tamil" },
  { label: "Odia", value: "Odia" },
  { label: "Marathi", value: "Marathi" },
  { label: "Telugu", value: "Telugu" },
  { label: "Malayalam", value: "Malayalam" },
  { label: "Gujrati", value: "Gujrati" },
  { label: "Bhojpuri", value: "Bhojpuri" },
  { label: "English", value: "English" },
  { label: "Haryanvi", value: "Haryanvi" },
  { label: "Bengali", value: "Bengali" },
];

const Categories = [
  { label: "Travel", value: "Travel" },
  { label: "Gaming", value: "Gaming" },
  { label: "Roasts", value: "Roasts" },
  { label: "Vines", value: "Vines" },
  { label: "Pranks", value: "Pranks" },
  { label: "Motivation", value: "Motivation" },
  { label: "News", value: "News" },
  { label: "Moto-Vlogs", value: "Moto-Vlogs" },
  { label: "Beauty", value: "Beauty" },
  { label: "Vlogs", value: "Vlogs" },
  { label: "Finance", value: "Finance" },
  { label: "Technology", value: "Technology" },
  { label: "Experiment", value: "Experiment" },
  { label: "Health and Fitness", value: "Health and Fitness" },
  { label: "Music", value: "Music" },
];

const InfluencerAccess = () => {
  // const [ele, setEle] = useState([]);

  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobNumber: "",
    altMobNumber: "",
    youtubeChannel: "",
    intVideoPrice: "",
    dediVideoPrice: "",
    // Language: "",
    // Categories: "",
    preRolPrice: "",
    instaChannel: "",
    storePrice: "",
    reelPrice: "",
    postPrice: "",
    referral: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("invoke");

    const {
      firstname,
      lastname,
      email,
      // Language,
      // Categories,
      mobNumber,
      altMobNumber,
      youtubeChannel,
      intVideoPrice,
      dediVideoPrice,
      preRolPrice,
      instaChannel,
      storePrice,
      reelPrice,
      postPrice,
      referral,
    } = input;

    const data = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        // Language,
        // Categories,
        mobNumber,
        altMobNumber,
        youtubeChannel,
        intVideoPrice,
        dediVideoPrice,
        preRolPrice,
        instaChannel,
        storePrice,
        reelPrice,
        postPrice,
        referral,
      }),
    });
    const res = await data.json();
    if (res.status === 400 || !res) {
      console.log("Data Failed");
    } else {
      console.log("Successful");
    }
  };

  // const handleAdd = () => {
  //   console.log("Invoke");
  // }
  //   const element = <><div className ="InfluencerAccess__box">
  //       <input
  //         className="info__box__youTube"
  //         type="text"
  //         placeholder="YouTube channel link*"
  //       />
  //       <button className="AddNew">
  //         -
  //       </button>
  //       <br />
  //       <input
  //         className="info__box"
  //         type="text"
  //         placeholder="Integrated Video Price*"
  //       />
  //       <input
  //         className="info__box"
  //         type="text"
  //         placeholder="Integrated Video Price*"
  //       />
  //       <input
  //         className="info__box"
  //         type="text"
  //         placeholder="Integrated Video Price*"
  //       />

  //       <div className="container__dropdown">
  //         <div className="Categories">
  //           <div className="Categories__style">
  //             <Select options={Categories} />
  //           </div>
  //         </div>

  //         <div className="Language">
  //           <div className="Language__style">
  //             <Select options={Language} />
  //           </div>
  //         </div>
  //       </div>
  //       </div>

  //     </>

  //   const copyele = [...ele, element];
  //   setEle(copyele);
  // };

  return (
    <>
      <Header />
      <form method="POST">
        <div className="InfluencerAccess">
          <h1 style={{ color: "white", fontWeight: "bold" }}>
            Influencer Access
          </h1>
          <div className="profile__pic">
            <img
              src="https://i.pinimg.com/originals/f1/3f/9c/f13f9c23ccfe9acd9ecca7acf95a4af2.jpg"
              alt="profile__pic"
            />
          </div>
          <div className="InfluencerAccess__box">
            <input
              className="info__box"
              type="text"
              placeholder="First Name*"
              value={input.firstname}
              name="firstname"
              onChange={handleInputs}
            />
            <input
              className="info__box"
              type="text"
              placeholder="Last Name*"
              value={input.lastname}
              name="lastname"
              onChange={handleInputs}
            />
          </div>
          <div className="InfluencerAccess__box">
            <input
              className="info__box boxWidth"
              type="email"
              placeholder="Office E-mail address*"
              value={input.email}
              name="email"
              onChange={handleInputs}
            />
          </div>
          <div className="InfluencerAccess__box">
            <input
              className="info__box"
              type="number"
              placeholder="Mobile Number*"
              value={input.mobNumber}
              name="mobNumber"
              onChange={handleInputs}
            />
            <input
              className="info__box"
              type="number"
              placeholder="Alternate Number"
              value={input.altMobNumber}
              name="altMobNumber"
              onChange={handleInputs}
            />
          </div>

          <div className="InfluencerAccess__box">
            <input
              className="info__box__youTube"
              value={input.youtubeChannel}
              name="youtubeChannel"
              onChange={handleInputs}
              type="text"
              placeholder="YouTube channel link*"
            />
            
          </div>
          {/* <button className="AddNew" onClick={handleAdd}>+</button> */}
          <div className="InfluencerAccess__box">
            <input
              className="info__box"
              type="number"
              placeholder="Integrated Video Price*"
              value={input.intVideoPrice}
              name="intVideoPrice"
              onChange={handleInputs}
            />
            <input
              className="info__box"
              type="number"
              placeholder="Dedicated Video Price*"
              value={input.dediVideoPrice}
              name="dediVideoPrice"
              onChange={handleInputs}
            />
            <input
              className="info__box"
              type="number"
              placeholder="Pre-Roll Price"
              value={input.preRolPrice}
              name="preRolPrice"
              onChange={handleInputs}
            />
          </div>

          <div className="container__dropdown">
            <div className="Categories">
              <div className="Categories__style">
                <label className="Categories__lable" htmlFor="Categories">
                  Categories
                </label>
                <Select
                  onClick={(e) => e.target.value}
                  name="Categories"
                  value={input.Categories}
                  options={Categories}
                />
              </div>
            </div>

            <div className="Language">
              <div className="Language__style">
                <label className="Categories__lable" htmlFor="Language">
                  Language
                </label>
                <Select
                  onClick={handleInputs}
                  value={input.Language}
                  name="Language"
                  options={Language}
                />
              </div>
            </div>
          </div>

          {/* <div id="youtube">
            {ele.map((elem, index) => (
              <div key={index}>{elem}</div>
            ))}
          </div> */}

          <div className="InfluencerAccess__box">
            <input
              className="info__box"
              type="text"
              placeholder="Instagram channal link"
              value={input.instaChannel}
              name="instaChannel"
              onChange={handleInputs}
            />
          </div>

          <div className="InfluencerAccess__box">
            <input
              className="info__box"
              type="number"
              placeholder="Store Price"
              value={input.storePrice}
              name="storePrice"
              onChange={handleInputs}
            />
            <input
              className="info__box"
              type="number"
              placeholder="Reel Price"
              value={input.reelPrice}
              name="reelPrice"
              onChange={handleInputs}
            />
            <input
              className="info__box"
              type="number"
              placeholder="Post Pricing"
              value={input.postPrice}
              name="postPrice"
              onChange={handleInputs}
            />
          </div>
          <div className="InfluencerAccess__box">
            <input
              className="info__box"
              type="text"
              value={input.referral}
              name="referral"
              onChange={handleInputs}
              placeholder="Referral Code"
            />
          </div>

          <div className="InfluencerAccess__box">
            <input type="checkbox" style={{ width: "20px", height: "20px" }} />
            <p
              style={{
                color: "white",
                fontWeight: "bold",
                fontFamily: " sans-serif",
              }}
            >
              Terms and Condition
            </p>
          </div>

          <button
            className="info__box"
            onClick={onSubmit}
            type="submit"
            style={{ backgroundColor: "orange", width: "20em" }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default InfluencerAccess;
