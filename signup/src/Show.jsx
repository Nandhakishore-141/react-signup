import React from "react";
import { useUserData } from "./useUserData.jsx";
import "./style.css";

const Show = () => {
  const [data] = useUserData();

  return (
    <div className="container">
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {data.name || "Not set"}</p>
      <p><strong>Roll No:</strong> {data.rollNo || "Not set"}</p>
    </div>
  );
};

export default Show;
