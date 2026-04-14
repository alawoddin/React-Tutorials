import React, { useEffect, useState } from "react";

const Effect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then(data => setData(data));
  } , []);
  return (
    <div>
      <h1>name :{data.title}</h1>
      <p>des {data.description}</p>
    </div>
  );
};

export default Effect;
