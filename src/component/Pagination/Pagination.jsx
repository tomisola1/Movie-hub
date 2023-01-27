import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Pagination from "react-bootstrap/Pagination";
import "./Pagination.css";

const PaginationComponent = ({ total, current, onChangePage }) => {
  //   let selected = 1;
  let items = [];
  if (current > 1) {
    items.push(
      <Pagination.Prev key="prev" onClick={() => onChangePage(current - 1)} />
    );
  }

  for (let page = 1; page <= total; page++) {
    items.push(
      <Pagination.Item
        key={page}
        data-page={page}
        active={page === current}
        onClick={() => onChangePage(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  if (current < total) {
    items.push(
      <Pagination.Next key="next" onClick={() => onChangePage(current + 1)} />
    );
  }
  return (
    <div className="pagination-container d-flex justify-content-center pt-5 w-100">
      <Pagination size="lg">{items}</Pagination>
    </div>
  );
};
export default PaginationComponent;
