import Button from "src/atoms/Button/Button";
import Icon from "src/atoms/Icons/Icon";
import Text from "src/atoms/Text/Text";
import classes from "./header.module.scss";
const Header = () => (
  <div className={classes.header}>
    <Icon icon="logo" />
    <nav className={classes["header-nav"]}>
      <a className={classes["nav-button"]}>
        <Text size="xl">Home</Text>
      </a>
      <a className={classes["nav-button"]}>
        <Text size="xl">Services</Text>
      </a>
      <a className={classes["nav-button"]}>
        <Text size="xl">Experience</Text>
      </a>
      <Button variant="blue">Comments</Button>
    </nav>
  </div>
);

export { Header };
