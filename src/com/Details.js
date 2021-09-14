import PropTypes from "prop-types";
import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function Details({ items, setitems }) {
  let { id } = useParams();
  const history = useHistory();

  const [state, setState] = useState(...items.filter((e) => e.id == id));
  let myChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  let update = () => {
    let temp = [...items];
    temp[temp.findIndex((e) => e.id == id)] = state;
    setitems(temp);
  };

  return (
    <div>
      <input
        type="text"
        value={state.name}
        name="name"
        onChange={myChangeHandler}
      ></input>
      <input
        type="text"
        value={state.price}
        name="price"
        onChange={myChangeHandler}
      ></input>
      <input
        type="text"
        value={state.detail}
        name="detail"
        onChange={myChangeHandler}
      ></input>

      <button onClick={update}>update</button>
      <button
        onClick={() => {
          let temp = [...items];
          temp.splice(
            temp.findIndex((e) => e.id == id),
            1
          );
          setitems(temp);
          history.push(`/dashboard`);
        }}
      >
        delete
      </button>
    </div>
  );
}

Details.propTypes = {
  items: PropTypes.shape({
    filter: PropTypes.func,
  }),
  setitems: PropTypes.func,
};
