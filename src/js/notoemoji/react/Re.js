import * as React from "react";

function SvgRe(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={900}
      height={600}
      viewBox="0 0 120 80"
      {...props}
    >
      <path d="M0 0h120v80H0z" fill="#36f" />
      <path d="M60 40L0 80h120z" fill="red" />
      <g fill="#ff0">
        <path d="M0 37v6l120-6v6z" />
        <path d="M60 40L0 5V0h5zl55-40h5v5z" />
        <path d="M60 40L57 0h6z" />
      </g>
    </svg>
  );
}

export default SvgRe;