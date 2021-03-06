import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromBucket } from "../../actions/bucket";

const BucketRow = ({ item }) => {
  const { clothe } = item;
  const dispatch = useDispatch();
  //   console.log(props);
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{clothe.kind.name}</span>
      <span>{clothe.information.color.name}</span>
      <span>{clothe.information.size.name}</span>
      <div className="d-flex align-items-center">
        <i
          class="material-icons pointer"
          onClick={() => dispatch(deleteFromBucket(item.id))}
        >
          delete
        </i>
        <span className="badge badge-warning badge-pill">{item.count}</span>
      </div>
    </li>
  );
};

export default BucketRow;
