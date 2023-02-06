import { useRef } from "react";
import Button from "src/atoms/Button/Button";
import Icon from "src/atoms/Icons/Icon";
import Input from "src/atoms/Input/Input";
import HeaderNavButton from "../HeaderNavButton";
import "./phoneHeader.scss";

const PhoneHeader = ({ scrollToBottom }: { scrollToBottom: () => void }) => {
  const phoneMenuInputRef = useRef<HTMLInputElement>(null);

  const forceHidePhoeMenuHandler = () => {
    if (phoneMenuInputRef.current) phoneMenuInputRef.current.checked = false;
  };

  return (
    <header className="header-visibility">
      <Input
        type="checkbox"
        id="menu-btn"
        className="hidden"
        ref={phoneMenuInputRef}
      />
      <label htmlFor="menu-btn" className="menu-btn">
        <Icon icon="menu" className="menu-icon" />
      </label>
      <div className="wrapper">
        <ul className="menu-options">
          <li onClick={() => forceHidePhoeMenuHandler()}>
            <HeaderNavButton path="/">Home</HeaderNavButton>
          </li>
          <li onClick={() => forceHidePhoeMenuHandler()}>
            <HeaderNavButton path="/experience">Experience</HeaderNavButton>
          </li>
          <li onClick={() => forceHidePhoeMenuHandler()}>
            <HeaderNavButton path="/services">Services</HeaderNavButton>
          </li>
          <li onClick={() => forceHidePhoeMenuHandler()}>
            <Button variant="blue" onClick={() => scrollToBottom()}>
              Comments
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default PhoneHeader;
