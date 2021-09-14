import React, { useState } from "react";
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export default function Search({ items, setAllPosts, posts }) {
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
              items.filter((item) => item.name.includes(e.target.value))
            );
          } else {
            setAllPosts(items.slice(0, 5));
          }
        }}
      />
    </>
  );
}
