import React, { useEffect, useState } from "react";

const Effect = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>ID: {data.id}</h1>
      <h2>Title: {data.title}</h2>
      <p>Description: {data.description}</p>
      <p>Price: ${data.price}</p>
    </div>
  );
};

export default Effect;