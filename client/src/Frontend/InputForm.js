import React, { useState } from "react";
import "./inputform.css";

const InputForm = () => {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    companyName: "",
    campaignBudget: "",
    launchTiming: "",
    loginId: "",
    password: "",
    status: "pending"
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInput({ ...input, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const {
        firstname,
        lastname,
        email,
        number,
        companyName,
        campaignBudget,
        launchTiming,
        loginId,
        password,
        status
    } = input;

     //const data = await fetch("http://localhost:4000/brand", {
      const data = await fetch("https://adicubeapps.herokuapp.com/brand", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        number,
        companyName,
        campaignBudget,
        launchTiming,
        loginId,
        password,
        status,
      }),
    });

    const res = await data.json();
    if (res.statusCode === 400 || !res) {
      alert("email is already exist");
      return;
    } else {
      alert("Data Successfully Saved!!");
    }

    setInput({
        firstname: "",
        lastname: "",
        email: "",
        number: "",
        companyName: "",
        campaignBudget: "",
        launchTiming: "",
        loginId: "",
        password: "",
        status: "pending"
    });
  };

  return (
    <div method="POST" className="input__form">
      <div className="input__box">
        <h3>Brand Registration form</h3>
      </div>
      <div className="input__box">
        <input
          className="formbox"
          value={input.firstname}
          onChange={handleInputs}
          name="firstname"
          type="text"
          placeholder="First Name"
        />
        <input
          className="formbox"
          value={input.lastname}
          onChange={handleInputs}
          name="lastname"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <div className="input__box">
        <input
          className="form_box"
          value={input.email}
          onChange={handleInputs}
          name="email"
          type="email"
          placeholder="Office E-mail address"
        />
      </div>
      <div className="input__box">
        <input
          className="formbox"
          value={input.number}
          onChange={handleInputs}
          name="number"
          type="number"
          placeholder="Mobile Number"
        />
        <input
          className="formbox"
          value={input.companyName}
          onChange={handleInputs}
          name="companyName"
          type="text"
          placeholder="Company Name"
        />
      </div>
      <div className="input__box">
        <input
          className="formbox"
          value={input.campaignBudget}
          onChange={handleInputs}
          name="campaignBudget"
          type="number"
          placeholder="Campaign Budget"
        />
        <input
          className="formbox"
          value={input.launchTiming}
          onChange={handleInputs}
          name="launchTiming"
          type="date"
          placeholder="Launch Timing"
        />
      </div>
      <div className="input__box">
        <input
          className="formbox"
          value={input.loginId}
          onChange={handleInputs}
          name="loginId"
          type="text"
          placeholder="Login ID"
        />
        <input
          className="formbox"
          value={input.password}
          onChange={handleInputs}
          name="password"
          type="password"
          placeholder="Login Password"
        />
      </div>
      <button
        className="formbox"
        type="submit"
        onClick={onSubmit}
        style={{ backgroundColor: "orange" }}
      >
        Submit
      </button>
    </div>
  );
};

export default InputForm;
