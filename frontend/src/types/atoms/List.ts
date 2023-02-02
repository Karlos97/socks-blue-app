import { textSizeMap, textWeightMap } from "../../helpers/constants";

export interface ListItemProps {
  children: React.ReactNode;
  size?: keyof typeof textSizeMap;
  weight?: keyof typeof textWeightMap;
}

export interface ListProps {
  items: string[];
  size?: keyof typeof textSizeMap;
  weight?: keyof typeof textWeightMap;
}
