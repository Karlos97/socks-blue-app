import Button from "src/atoms/Button/Button";
import Icon from "src/atoms/Icons/Icon";
import Wrapper from "src/atoms/Wrapper/Wrapper";
import PhoneHeader from "./PhoneHeader/PhoneHeader";
import classes from "./header.module.scss";
import HeaderNavButton from "./HeaderNavButton";

const Header = ({ scrollToBottom }: { scrollToBottom: () => void }) => (
  <div className={classes["header-wrapper"]}>
    <PhoneHeader scrollToBottom={scrollToBottom} />
    <div className={classes.header}>
      <Icon icon="logo" size="logo" />
      <nav className={classes["header-nav"]}>
        <Wrapper justify="space" align="center">
          <HeaderNavButton path="/">Home</HeaderNavButton>
          <HeaderNavButton path="/experience">Experience</HeaderNavButton>
          <HeaderNavButton path="/services">Services</HeaderNavButton>
          <Button variant="blue" onClick={() => scrollToBottom()}>
            Comments
          </Button>
        </Wrapper>
      </nav>
    </div>
  </div>
);

export default Header;
