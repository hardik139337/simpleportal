/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// import React from "react";
// import styled from "styled-components";

export default function Home() {
  // let Div = styled.div`
  //   background-color: yellow;
  //   color: red;
  // `;

  return (
    <div
      css={css`
        color: #35b846;
        background-color: #e6e61b;
        h5 {
          color: blue;
        }
      `}
    >
      welcome to react app
      <h5>h5</h5>
    </div>
  );
}
