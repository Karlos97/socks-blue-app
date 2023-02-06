import Text from "src/atoms/Text/Text";
import { NavLink } from "react-router-dom";
import classes from "./header.module.scss";

const HeaderNavButton = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => (
  <NavLink className={classes["nav-button"]} to={path}>
    <Text size="xl">{children}</Text>
  </NavLink>
);

export default HeaderNavButton;
