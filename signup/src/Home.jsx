import React, { useState } from "react";
import { useUserData } from "./useUserData.jsx";
import "./style.css";
import Show from "./Show.jsx";

const Home = () => {
  const [data, setData] = useUserData();
  const [name, setName] = useState(data.name);
  const [rollNo, setRollNo] = useState(data.rollNo);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ name, rollNo });
  };

  return (
    <div className="container">
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit} className="form">
        <lable> UserName:
        <input
          type="text"
          placeholder="User name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          required
        /></lable>
        <label>password : 
        <input
          type="password"
          placeholder="Password"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          className="input"
          required
        /></label>
        <button type="submit" className="btn" onClick={Show.jsx}>Sign up</button>
      </form>
    </div>
  );
};

export default Home;
