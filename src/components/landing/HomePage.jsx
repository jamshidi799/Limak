import React, { Fragment } from "react";
import Banner from "./‌Banner";
import ClothCardVertial from "../cloth/ClothCardVertical";

const cloth_list = [
  {
    id: 1,
    name: "reza",
    price: "12000",
  },
  {
    id: 2,
    name: "reza",
    price: "12000",
  },
  {
    id: 3,
    name: "reza",
    price: "1200",
  },
];

const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <br />
      <div className="container-fluid">
        <div className="row justify-content-md-around">
          {cloth_list.map((cloth) => (
            <ClothCardVertial key={cloth.id} cloth={cloth} />
          ))}
        </div>
      </div>
      <br />
      <div className="container-fluid">
        <div className="row justify-content-md-around">
          {cloth_list.map((cloth) => (
            <ClothCardVertial key={cloth.id} cloth={cloth} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
