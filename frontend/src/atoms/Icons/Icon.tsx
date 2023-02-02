import IcoMoon from "icomoon-react";
import iconSet from "../../assets/icomoon/selection.json";
import { IconProps } from "../../types/atoms/icon";
import classes from "./Icon.module.scss";

const Icon = ({ classname, icon }: IconProps) => (
  <IcoMoon
    className={classname ? classname : classes.icon}
    iconSet={iconSet}
    icon={icon}
  />
);

export default Icon;
