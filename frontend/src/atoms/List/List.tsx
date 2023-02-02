import { ListItemProps, ListProps } from "../../types/atoms/List";
import { Text } from "../Text/Text";
import classes from "./list.module.scss";

const ListItem = ({ children, size, weight }: ListItemProps) => (
  <li className={classes["list-item"]}>
    <Text size={size} weight={weight}>
      {children}
    </Text>
  </li>
);

const List = ({ items = [], size = "m", weight = "semi" }: ListProps) => (
  <ul className={classes.list}>
    {items?.map((text: string) => (
      <ListItem size={size} weight={weight}>
        {text}
      </ListItem>
    ))}
  </ul>
);

export { List, ListItem };