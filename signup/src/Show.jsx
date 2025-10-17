import React from "react";
import { useUserData } from "./useUserData.jsx";
import "./style.css";

const Show = () => {
  const [data] = useUserData();

  return (
    <div className="container">
      <h2>About Student</h2>
      <p><strong>User Name:</strong> {data.name}</p>
      <p><strong>Password:</strong> {data.rollNo}</p>
    </div>
  );
};

export default Show;
