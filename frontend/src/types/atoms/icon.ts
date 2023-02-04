import { iconSizeMap } from "../../helpers/atomConstants";

export interface IconProps {
  className?: string;
  icon: string;
  size?: keyof typeof iconSizeMap;
}
