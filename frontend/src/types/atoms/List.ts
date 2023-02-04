import { textSizeMap, textWeightMap } from "../../helpers/atomConstants";

export interface ListItemProps {
  children: React.ReactNode;
  size?: keyof typeof textSizeMap;
  weight?: keyof typeof textWeightMap;
}

export interface ListProps {
  items: string[];
  className?: string;
  size?: keyof typeof textSizeMap;
  weight?: keyof typeof textWeightMap;
}
