import PropTypes from "prop-types";
import React, { useState } from "react";

export default function Search({ items, setAllPosts }) {
  const [state, setstate] = useState("");
  return (
    <>
      <input
        placeholder="Search"
        type="text"
        value={state}
        onChange={(e) => {
          setstate(e.target.value);
          if (e.target.value != "") {
            setAllPosts(
              items
                .filter((item) => item.name.includes(e.target.value))
                .slice(0, 5)
            );
          } else {
            setAllPosts(items.slice(0, 5));
          }
        }}
      />
    </>
  );
}

Search.propTypes = {
  items: PropTypes.shape({
    filter: PropTypes.func,
    slice: PropTypes.func,
  }),
  posts: PropTypes.array,
  setAllPosts: PropTypes.func,
};
