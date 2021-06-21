import Header from "./Header";
import React, { useState } from "react";
import axios from "axios";
import "./Header.css";

const BrandLogin = () => {
    const [file, setFile] = useState(null);
    const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobNumber: "",
    companyName: "",
    campaignBudget: "",
    launchTiming: "",
    loginId: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const onSubmit = async (e) => {
    console.log("invoke");
    e.preventDefault();

    const {
      firstname,
      lastname,
      email,
      mobNumber,
      companyName,
      campaignBudget,
      launchTiming,
      loginId,
      password,
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
        
        await axios.post("http://localhost:4000/brand", input);
        
      }

    console.log(input)

    const data = await fetch("http://localhost:4000/brand", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file,
        firstname,
        lastname,
        email,
        mobNumber,
        companyName,
        campaignBudget,
        launchTiming,
        loginId,
        password,
      }),
    });

    const res = await data.json();
    if (res.statusCode === 400 || !res) {
      alert("already exist");
    } else {
      alert("Data Successfully Saved!!");
    }

    setInput({
      firstname: "",
      lastname: "",
      email: "",
      mobNumber: "",
      companyName: "",
      campaignBudget: "",
      launchTiming: "",
      loginId: "",
      password: "",
    });
  };

  const user={
    profilePic : "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/129-512.png"
  }

  return (
    <>
      <Header />
      <div method="POST" className="BrandLogin">
        <h1 style={{ color: "white", fontWeight: "bold" }}>Brand Login</h1>
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
        <div className="BrandLogin__box">
          <input
            className="formbox"
            name="firstname"
            type="text"
            placeholder="First Name*"
            value={input.firstname}
            onChange={handleInputs}
          />
          <input
            className="formbox"
            name="lastname"
            type="text"
            placeholder="Last Name*"
            value={input.lastname}
            onChange={handleInputs}
          />
        </div>
        <div className="BrandLogin__box">
          <input
            className="form_box"
            name="email"
            type="email"
            placeholder="Office E-mail address*"
            value={input.email}
            onChange={handleInputs}
          />
        </div>
        <div className="BrandLogin__box">
          <input
            className="formbox"
            name="mobNumber"
            type="number"
            placeholder="Mobile Number*"
            value={input.mobNumber}
            onChange={handleInputs}
          />
          <input
            className="formbox"
            name="companyName"
            type="text"
            placeholder="companyName"
            value={input.companyName}
            onChange={handleInputs}
          />
        </div>
        <div className="BrandLogin__box">
          <input
            className="formbox"
            name="campaignBudget"
            type="number"
            placeholder="campaignBudget"
            value={input.campaignBudget}
            onChange={handleInputs}
          />
          <input
            className="formbox"
            name="launchTiming"
            type="date"
            placeholder="launchTiming"
            value={input.launchTiming}
            onChange={handleInputs}
          />
        </div>
        <div className="BrandLogin__box">
          <input
            className="formbox"
            name="loginId"
            type="email"
            placeholder="Login ID*"
            value={input.loginId}
            onChange={handleInputs}
          />
          <input
            className="formbox"
            name="password"
            type="password"
            placeholder="Login Password*"
            value={input.password}
            onChange={handleInputs}
          />
        </div>
        <button
          type="submit"
          onClick={onSubmit}
          className="formbox"
          style={{ backgroundColor: "orange" }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default BrandLogin;
