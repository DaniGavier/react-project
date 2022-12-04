import React, { useState, useEffect } from "react";
import ListMovie from "./ListMovie";

const ListMoviesContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
    console.log(data);
  });

  return <ListMovie data={data} />;
};

export default ListMoviesContainer;
