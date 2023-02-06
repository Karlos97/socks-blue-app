import Text from "src/atoms/Text/Text";
import Wrapper from "src/atoms/Wrapper/Wrapper";
import classes from "./footer.module.scss";

const Footer = () => (
  <footer className={classes.footer}>
    <Wrapper justify="center">
      <Text size="s">
        Copyright © 2019 Robi-pixel and Karol Minta. All Right Reserved.
      </Text>
    </Wrapper>
  </footer>
);

export default Footer;
