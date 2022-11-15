import React from "react";

import Cards from "./Cards";
import JsonData from "./JsonData";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
            {
                JsonData.map((val,index)=>{
                    return <Cards key={index} img={val.imgsrc}  title={val.title}/>
                })
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
