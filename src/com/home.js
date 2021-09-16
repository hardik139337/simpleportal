import { css } from '@emotion/css';
// import { css } from "styled-components";
export default function Home() {
  let temp = css`
    background-color: red;
    h5 {
      background-color: black;
    }
  `;
  return (
    <div className={`${temp} m-5`}>
      welcome to react app
      <h5>h5</h5>
    </div>
  );
}
