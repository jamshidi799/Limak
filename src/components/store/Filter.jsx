import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { filter } from "../../actions/cloth";

import {
  getSizes,
  getCategory,
  getColors,
  getKinds,
} from "../../actions/store";

const GreenCheckbox = withStyles({
  root: {
    color: "black",
    transform: "scale(0.8)",
    margin: "0",
    padding: "0",
    "&$checked": {
      color: "black",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Filter = (props) => {
  const kinds = useSelector((state) => state.store.kinds);
  const colors = useSelector((state) => state.store.colors);
  const sizes = useSelector((state) => state.store.sizes);
  const categories = useSelector((state) => state.store.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKinds());
    dispatch(getSizes());
    dispatch(getCategory());
    dispatch(getColors());
  }, []);

  const handleChange = (e) => {
    if (e.checked === undefined) e.checked = true;
    else e.checked = !e.checked;
  };

  const handleFilter = () => {
    const kind = kinds.filter((k) => k.checked).map((k) => k.name);
    const color = colors.filter((k) => k.checked).map((k) => k.name);
    const size = sizes.filter((k) => k.checked).map((k) => k.name);
    const category = categories.filter((k) => k.checked).map((k) => k.name);
    console.log(kind, color, size);
    const query = {
      kind: [...kind],
      color: [...color],
      size: [...size],
      category: [...category],
    };
    dispatch(filter(query));
  };

  return (
    <div className="filter container-fluid">
      <div>
        <h1 className="text-center">فیلتر‌ها</h1>
      </div>
      <div>
        <h3>نوع</h3>
        <div className="d-flex justify-content-start flex-wrap">
          {kinds.map((kind) => {
            return (
              <div key={kind.name} className="m-0">
                <div className="m-2">
                  <span>{kind.name}</span>
                  <GreenCheckbox
                    checked={kind.checked}
                    onChange={() => handleChange(kind)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3>قد و قواره</h3>
        <div className="d-flex justify-content-start flex-wrap">
          {sizes.map((size) => {
            return (
              <div key={size.name}>
                <div className="m-2">
                  <span>{size.name}</span>
                  <GreenCheckbox
                    checked={size.checked}
                    onChange={() => handleChange(size)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3>رنگ</h3>
        <div className="d-flex justify-content-start flex-wrap">
          {colors.map((color) => {
            return (
              <div key={color.name}>
                <div className="m-2">
                  <span>{color.name}</span>
                  <GreenCheckbox
                    checked={color.checked}
                    onChange={() => handleChange(color)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3>مجموعه ها</h3>
        <div className="d-flex justify-content-start flex-wrap">
          {categories.map((category) => {
            return (
              <div key={category.name}>
                <div className="m-2">
                  <span onClick={() => handleChange(category)}>
                    {category.name}
                  </span>
                  <GreenCheckbox
                    checked={category.checked}
                    onChange={() => handleChange(category)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-warning" onClick={handleFilter}>
          جستجو
        </button>
      </div>
    </div>
  );
};

export default Filter;
