import { classnames } from "../../helpers/classnames";
import {
  textSizeMap,
  textTypeMap,
  textWeightMap,
} from "../../helpers/constants";
import { TextProps } from "../../types/atoms/text";
import classes from "./text.module.scss";

const Text = ({
  size = "m",
  weight = "semi",
  type = "default",
  className = "",
  onClick,
  children,
}: TextProps) => (
  <p
    className={classnames({
      [classes.text]: true,
      [classes[`text-${textSizeMap[size]}`]]: true,
      [classes[`text-${textWeightMap[weight]}`]]: true,
      [classes[`text-${textTypeMap[type]}`]]: true,
      [className]: className.length > 0,
    })}
    onClick={onClick}
  >
    <>
      {console.log(classes[`text-${textWeightMap[weight]}`])}
      {children}
    </>
  </p>
);

export { Text };
