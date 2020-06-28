import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BucketRow from "./BucketRow";
import { addBucketToServer } from "../../actions/bucket";

const Bucket = () => {
  const bucket = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();

  const onSubmit = () => {
    bucket.forEach((item) => {
      const data = {
        clothe_uid: item.clothe.id,
        color_name: item.clothe.information.color.name,
        size_name: item.clothe.information.size.name,
        count: 1,
      };
      console.log(data);
      dispatch(addBucketToServer(data));
    });
  };

  return (
    <div
      className="modal fade"
      id="exampleModalLong"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              سبد خرید
            </h5>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              {bucket.map((e) => (
                <BucketRow item={e} key={e.uu_id} />
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>

            <button
              type="button"
              className="btn btn-warning"
              onClick={onSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bucket;
