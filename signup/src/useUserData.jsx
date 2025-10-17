import { useState, useEffect } from "react";

export const useUserData = () => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("userData");
    return saved ? JSON.parse(saved) : { name: "", rollNo: "" };
  });

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(data));
  }, [data]);

  return [data, setData];
};
