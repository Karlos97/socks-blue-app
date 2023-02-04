import Text from "src/atoms/Text/Text";
import classes from "./footer.module.scss";

const Footer = () => (
  <footer className={classes.footer}>
    <Text size="s">
      Copyright © 2019 Robi-pixel and Karol Minta. All Right Reserved.
    </Text>
  </footer>
);

export { Footer };
