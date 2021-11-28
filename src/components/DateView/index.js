import React from "react";

import "./styles.scss";

const DateView = (props) => {
  return (
    <p className="dateView">
      <span className="day">day</span> / <span className="month">month</span>
    </p>
  );
};

export default DateView;
