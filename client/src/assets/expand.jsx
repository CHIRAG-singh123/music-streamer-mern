import React from "react";

const Expand = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 7.414V9a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7.414l2.293 2.293a1 1 0 0 1-1.414 1.414L6 7.414zM15 6a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L16.586 6H15zM5 14a1 1 0 0 1 1 1v1.586l2.293-2.293a1 1 0 0 1 1.414 1.414L7.414 18H9a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm9.293 1.707a1 1 0 0 1 1.414-1.414L18 16.586V15a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h1.586l-2.293-2.293z"
        fill={color}
      />
    </svg>
  );
};

export default Expand;
