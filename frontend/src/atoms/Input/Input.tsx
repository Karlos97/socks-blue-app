import { classnames } from "../../helpers/classnames";
import { InputProps } from "../../types/atoms/input";
import classes from "./input.module.scss";

const Input = ({
  disabled = false,
  size = "medium",
  type = "number",
  className = "",
  children,
  placeholder = "",
  value = "",
  id = "",
  onChange = () => {
    return;
  },
}: InputProps) => {
  return (
    <input
      className={classnames({
        [classes.input]: true,
        [classes["disabled"]]: disabled,
        [classes[`input-${size}`]]: true,
        [className]: className !== "",
      })}
      type={type}
      id={id}
      aria-disabled={disabled}
      disabled={disabled}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.currentTarget.value)}
    >
      {children}
    </input>
  );
};

export { Input };
