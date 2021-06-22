import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import "./Header.css";

const InfluencerAccess = () => {
  const [file, setFile] = useState(null);
  // const PublicFolder = "http://localhost:5000/uploads/"

  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobNumber: "",
    altMobNumber: "",
    youtubeChannel: "",
    intVideoPrice: "",
    dediVideoPrice: "",
    Language: "",
    Categories: "",
    preRolPrice: "",
    instaChannel: "",
    storePrice: "",
    reelPrice: "",
    postPrice: "",
    referral: "",
    status:"pending"
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const onSubmit = async (e) => {
    console.log("invoke")
    e.preventDefault();

    const {
      firstname,
      lastname,
      email,
      Language,
      Categories,
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
      status
    } = input;

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      input.profilePic = filename;
      try {
        await axios.post("http://localhost:4000/Backend/upload", data);
      } catch (err) {}
      
      await axios.post("http://localhost:4000/register", input);
      
    }
    console.log(input)
    

    const data = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file,
        firstname,
        lastname,
        email,
        Language,
        Categories,
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
        status
      }),
    });
    const res = await data.json();
    if (res.statusCode === 400 || !res) {
      alert("YoutubeLink is already exist");
      return;
    } else {
      alert("Data Successfully Saved!!");
    }

    setInput({
      firstname: "",
      lastname: "",
      email: "",
      mobNumber: "",
      altMobNumber: "",
      youtubeChannel: "",
      intVideoPrice: "",
      dediVideoPrice: "",
      Language: "",
      Categories: "",
      preRolPrice: "",
      instaChannel: "",
      storePrice: "",
      reelPrice: "",
      postPrice: "",
      referral: "",
      status:"pending"
    })
  };

  const user={
    profilePic : "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/129-512.png"
  }


  return (
    <>
      <Header />
      <div method="POST">
        <div className="InfluencerAccess">


        <div className="profile__pic">
            
            <img
              src={file ? URL.createObjectURL(file) :  user.profilePic}
              alt="profile"
            />
            <label htmlFor="fileInput">
              {/* <i className="settingsPIcon fas fa-user-circle"></i>  */}
              <span className="uplodeImage">UplodeImage</span>
              <i className="settingsPIcon ">+</i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])} />

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
              placeholder="E-mail address*"
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

          <div className="InfluencerAccess__box" >
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
          <div className="container__dropdown ">
            <div className="Categories ">
              <div className="Categories__style ">
                <label className="Categories__lable " htmlFor="Categories">
                  Categories
                </label>
                <select className="info__box " value={input.Categories} name="Categories" onChange={handleInputs}>
                  <option defaultValue  >Categories</option>
                  <option value="Travel" >Travel</option>
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
              </div>
            </div>

            <div className="Language">
              <div className="Language__style">
                <label className="Categories__lable" htmlFor="Language">
                  Language
                </label><br/>
                <select className="info__box " value={input.Language} name="Language" onChange={handleInputs}>
                  <option defaultValue>Language</option>
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
              </div>
            </div>
          </div>

          {/* {ele.map((elem, index) => (
            <div key={index}>{elem}</div>
          ))} */}

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
            <input type="checkbox" style={{ width: "20px", height: "20px" }} required />
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
      </div>
    </>
  );
};

export default InfluencerAccess;
