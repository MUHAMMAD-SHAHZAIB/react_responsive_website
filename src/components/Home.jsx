import React from "react";
import web from "../images/img2.svg"
import Common from "./Common";

const Home = (props) => {
  return ( 
    <>
      <Common
        name={"Grow Your Bussiness"}
        btn={"Get started"}
        imgSrc={web}
      />
    </>
  );
};

export default Home;
