import React, { useState, useEffect } from "react";
// import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";






const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/colors")
      .then(res => {
        // console.log("data from the colors call in bubblepage: ", res)
        setColorList(res.data)
        //why is this not (res.data.data)? According to console.log
      })
      .catch(err => {
        console.error(err.message)
      })
  }, [])
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <h1>Welcome to the Bubble Page</h1>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
