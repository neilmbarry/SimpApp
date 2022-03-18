import React, { useState, useEffect } from "react";
import classes from "./CarouselWindow.module.css";

const CarouselWindow = ({ windows, children, parentWidth, slide }) => {
  const translated = { transform: `translateX(${slide * -200}px)` };

  return (
    <div className={classes.window} style={translated}>
      {children}
    </div>
  );
};

export default CarouselWindow;
