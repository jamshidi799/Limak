import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Pagination = ({ page }) => {
  const next = useSelector((state) => state.store.next);
  const previous = useSelector((state) => state.store.previous);

  const getPrevious = () => (
    <Fragment>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="page-item">
        <Link to={`./${Number(page) - 1}`} class="page-link">
          {Number(page) - 1}
        </Link>
      </li>
    </Fragment>
  );

  const getNext = () => (
    <Fragment>
      <li class="page-item">
        <Link to={`./${Number(page) + 1}`} class="page-link">
          {Number(page) + 1}
        </Link>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </Fragment>
  );

  return (
    <nav aria-label="Page navigation">
      <ul class="pagination mt-4">
        {previous ? getPrevious() : <div></div>}

        <li class="page-item">
          <div class="page-link">{page}</div>
        </li>
        {next ? getNext() : <div></div>}
      </ul>
    </nav>
  );
};

export default Pagination;
