import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { grey } from "@material-ui/core/colors/grey";

import {
  getSizes,
  getCategory,
  getColors,
  getKinds,
} from "../../actions/store";

// const GreenCheckbox = withStyles({
//   root: {
//     color: grey[400],
//     "&$checked": {
//       color: grey[600],
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color="default" {...props} />);

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

  return (
    <div className="filter container-fluid">
      <div>
        <h3>نوع</h3>
        <div className="d-flex justify-content-start flex-wrap">
          {kinds.map((kind) => {
            return (
              <div key={kind.name} className="m-0">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={kind.checked}
                      onChange={() => handleChange(kind)}
                    />
                  }
                  label={kind.name}
                />
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
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={size.checked}
                      onChange={() => handleChange(size)}
                    />
                  }
                  label={size.name}
                />
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
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={color.checked}
                      onChange={() => handleChange(color)}
                    />
                  }
                  label={color.name}
                />
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
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={category.checked}
                      onChange={() => handleChange(category)}
                    />
                  }
                  label={category.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
