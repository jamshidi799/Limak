import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromBucket } from "../../actions/bucket";

const BucketRow = (props) => {
  const dispatch = useDispatch();
  //   console.log(props);
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      Cras justo odio {props.cloth.id}
      <div className="d-flex align-items-center">
        <i
          class="material-icons"
          onClick={() => dispatch(deleteFromBucket(props.cloth.id))}
        >
          delete
        </i>
        <span className="badge badge-warning badge-pill">14</span>
      </div>
    </li>
  );
};

export default BucketRow;
