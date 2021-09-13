import React, { useState } from "react";
/* eslint-disable react/prop-types */
//
export default function Add({ additem }) {
  const [state, setState] = useState({ name: "", price: "", detail: "" });
  let myChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <label htmlFor="">name</label>
      <input
        type="text"
        value={state.name}
        name="name"
        onChange={myChangeHandler}
      />
      <label htmlFor="">price</label>
      <input
        type="text"
        value={state.price}
        name="price"
        onChange={myChangeHandler}
      />
      <label htmlFor="">details</label>
      <input
        type="text"
        value={state.detail}
        name="detail"
        onChange={myChangeHandler}
      />

      <button
        onClick={() => {
          additem(state);
        }}
      >
        add
      </button>
      {/* {console.log(state)} */}
    </div>
  );
}
