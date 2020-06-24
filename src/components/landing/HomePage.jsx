import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { SERVER_ADDRESS } from "../../consts";
import Banner from "./‌Banner";
import ClothCardVertial from "../cloth/ClothCardVertical";
import { getCategory } from "../../actions/store";

const HomePage = () => {
  const categories = useSelector((state) => state.store.categories);
  const dispatch = useDispatch();
  const [clothBahar, setClothBahar] = useState(
    useSelector((state) => state.cloth.clothes).slice(0, 3)
  );

  useEffect(() => {
    axios
      .get(`${SERVER_ADDRESS}/api/store/category`)
      .then((res) => {
        const query = {
          kind: [],
          color: [],
          size: [],
          category: [res.data.category[0].name],
        };
        axios
          .post(`${SERVER_ADDRESS}/api/store/store_page?page=${1}`, query)
          .then((res) => {
            setClothBahar(res.data.results.clothes.slice(0, 3));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <Banner />
      <br />
      <div className="container-fluid">
        <div className="row justify-content-md-around">
          {clothBahar.map((cloth) => (
            <ClothCardVertial tial key={cloth.id} cloth={cloth} />
          ))}
        </div>
      </div>
      <br />
      <div className="container-fluid">
        <div className="row justify-content-md-around">
          {clothBahar.map((cloth) => (
            <ClothCardVertial key={cloth.id} cloth={cloth} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
