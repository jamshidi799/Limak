import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BucketRow from "./BucketRow";

const Bucket = () => {
  useEffect(() => {}, []);

  const bucket = useSelector((state) => state.bucket.list);
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
              {bucket.map((cloth) => (
                <BucketRow cloth={cloth} key={cloth.id} />
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
            {/* <button
              type="button"
              class="btn btn-secondary"
              data-container="body"
              data-toggle="popover"
              data-placement="top"
              data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            >
              Popover on top
            </button> */}
            <button type="button" className="btn btn-warning">
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bucket;
