import React, { memo } from "react";
import "./style.scss";

const Footer = memo(() => {
  return (
    <div className="footer">
      <div className="inner">
        <p>
          Created by Chirag Pawar, Dhruvil Shah and Dhruv Raval
        </p>
      </div>
    </div>
  );
});

export default Footer;
