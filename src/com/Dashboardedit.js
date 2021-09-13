import React, { useState } from "react";
/* eslint-disable react/prop-types */

// import React from 'react'

function Edit({ item, items, setitems, index }) {
  const [state, setState] = useState(item);
  let myChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  let update = () => {
    let temp = [...items];
    temp[index] = state;
    setitems(temp);
  };
  return (
    <tr key={index}>
      <th scope="row">{index}</th>
      <td>
        <input
          type="text"
          value={state.name}
          name="name"
          onChange={myChangeHandler}
        />
      </td>
      <td>
        <input
          type="text"
          value={state.price}
          name="price"
          onChange={myChangeHandler}
        />
      </td>
      <td>
        <input
          type="text"
          value={state.detail}
          name="detail"
          onChange={myChangeHandler}
        />
      </td>
      <td>
        <button onClick={update}>update</button>
        <button
          onClick={() => {
            let temp = [...items];
            temp.splice(index, 1);
            setitems(temp);
          }}
        >
          delete
        </button>
      </td>
    </tr>
  );
}

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
