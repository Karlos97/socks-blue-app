import React from "react";
import { classnames } from "src/helpers/classnames";
import { alignItemsMap, justifyContentMap } from "src/helpers/atomConstants";
import { WrapperType } from "src/types/atoms/wrapper";
import classes from "./wrapper.module.scss";

const Wrapper = ({
  children,
  colSpan = 8,
  style = {},
  className = "",
  disableColSpan = false,
  justify = "none",
  align = "none",
  direction = "",
}: WrapperType) => {
  return (
    <div
      className={classnames({
        [classes.wrapper]: true,
        [classes[`wrapper-justify-${justifyContentMap[justify]}`]]:
          justify !== "none",
        [classes[`wrapper-align-${alignItemsMap[align]}`]]: align !== "none",
        [classes["wrapper-column"]]: direction === "column",
        [className]: className.length > 0,
      })}
      style={{
        width: `${disableColSpan ? "" : `${(colSpan / 8) * 100}%`}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
