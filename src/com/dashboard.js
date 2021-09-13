import React from "react";
/* eslint-disable react/prop-types */

export default function Dashboard({ items }) {
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
          {items.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>{" "}
    </div>
  );
}
