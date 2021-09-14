import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export default function Dashboard({ items }) {
  const [postsPerPage] = useState(5);
  // const [offset, setOffset] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const [posts, setAllPosts] = useState(
    items.slice(
      pageCount * postsPerPage,
      pageCount * postsPerPage + postsPerPage
    )
  );

  return (
    <div className="counter">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">detail</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <th scope="row"></th>
            <td>
              <input type="text" placeholder="Search" onChange={(e) => {}} />
            </td>
            <td></td>
            <td></td>
          </tr> */}
          {posts.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <Link to={`/details/${item.id}`}>{item.detail}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        pageRangeDisplayed={3}
        // marginPagesDisplayed={3}
        pageCount={items.length / postsPerPage}
        onPageChange={(e) => {
          // console.log(e);
          // setPageCount(e.selected);
          setAllPosts(
            items.slice(
              e.selected * postsPerPage,
              e.selected * postsPerPage + postsPerPage
            )
          );
        }}
      ></ReactPaginate>
      <CSVLink data={items} filename="csv.csv">
        CSV
      </CSVLink>
    </div>
  );
}
