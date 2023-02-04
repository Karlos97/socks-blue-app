import { alignItemsMap, justifyContentMap } from "../../helpers/atomConstants";

export interface WrapperType {
  children?: React.ReactNode;
  colSpan?: number;
  disableColSpan?: boolean;
  justify?: keyof typeof justifyContentMap;
  align?: keyof typeof alignItemsMap;
  direction?: string;
  style?: { [key: string]: string };
  className?: string;
}
