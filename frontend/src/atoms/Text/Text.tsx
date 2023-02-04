import { classnames } from "src/helpers/classnames";
import {
  textSizeMap,
  textTypeMap,
  textWeightMap,
} from "src/helpers/atomConstants";
import { TextProps } from "src/types/atoms/text";
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
      [classes[`text-${textTypeMap[type]}`]]: type !== "default",
      [className]: className.length > 0,
    })}
    onClick={onClick}
  >
    {children}
  </p>
);

export default Text;
