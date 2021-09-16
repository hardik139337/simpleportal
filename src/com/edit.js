import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function Edit({ item, items, setitems, index }) {
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
      <th scope='row'>{index}</th>
      <td>
        <input
          type='text'
          value={state.name}
          name='name'
          onChange={myChangeHandler}
        />
      </td>
      <td>
        <input
          type='text'
          value={state.price}
          name='price'
          onChange={myChangeHandler}
        />
      </td>
      <td>
        <input
          type='text'
          value={state.detail}
          name='detail'
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

Edit.propTypes = {
  index: PropTypes.any,
  item: PropTypes.array,
  items: PropTypes.array,
  setitems: PropTypes.func,
};
