import IcoMoon from "icomoon-react";
import iconSet from "src/assets/icomoon/selection.json";
import { iconSizeMap } from "src/helpers/atomConstants";
import { classnames } from "src/helpers/classnames";
import { IconProps } from "src/types/atoms/icon";
import classes from "./icon.module.scss";

const Icon = ({ className = "", icon, size = "small" }: IconProps) => (
  <IcoMoon
    className={classnames({
      [classes.icon]: true,
      [classes[`icon-${iconSizeMap[size]}`]]: className !== "small",
      [className]: className !== "",
    })}
    iconSet={iconSet}
    icon={icon}
  />
);

export default Icon;
