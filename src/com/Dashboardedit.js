import React from "react";
import Edit from "./edit";
/* eslint-disable react/prop-types */

export default function Dashboard({ items, setitems }) {
  return (
    <div className="counter">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">detail</th>
            <th scope="col">edit</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <Edit
              key={index}
              item={item}
              items={items}
              setitems={setitems}
              index={index}
            ></Edit>
          ))}
        </tbody>
      </table>
    </div>
  );
}
