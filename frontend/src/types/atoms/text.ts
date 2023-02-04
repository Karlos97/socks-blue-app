import {
  textSizeMap,
  textTypeMap,
  textWeightMap,
} from "../../helpers/atomConstants";

export interface TextProps {
  size?: keyof typeof textSizeMap;
  weight?: keyof typeof textWeightMap;
  type?: keyof typeof textTypeMap;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
