import React, { useState } from "react";
import { useUserData } from "./useUserData.jsx";
import "./style.css";

const Home = () => {
  const [data, setData] = useUserData();
  const [name, setName] = useState(data.name);
  const [rollNo, setRollNo] = useState(data.rollNo);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ name, rollNo });
    alert("Data saved!");
  };

  return (
    <div className="container">
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          required
        />
        <input
          type="text"
          placeholder="Roll No"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          className="input"
          required
        />
        <button type="submit" className="btn">Save</button>
      </form>
    </div>
  );
};

export default Home;
