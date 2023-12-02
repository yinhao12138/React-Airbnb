import React, { memo } from "react";
import { styleStrToObj } from "./utils";

const IconBelow = memo(() => {
  return (
    <div>
      <svg
        viewBox="0 0 24 24"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        style={styleStrToObj("height: 10px; width: 10px; fill: currentcolor;margin-left: 5px;margin-top: 2px")}>
        <path d="m23.85 6.86-11.5 11a .5.5 0 0 1 -.69 0l-11.5-11a .5.5 0 0 1 .34-.86h23a .5.5 0 0 1 .35.86z" fillRule="evenodd"></path>
      </svg>
    </div>
  );
});

export default IconBelow;
