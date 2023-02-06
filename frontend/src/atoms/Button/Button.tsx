import { classnames } from "src/helpers/classnames";
import {
  ButtonProps,
  buttonSizeMap,
  buttonVariantToClassName,
} from "src/types/atoms/button";
import classes from "./button.module.scss";

const Button = ({
  variant = "outline",
  disabled = false,
  size = "medium",
  children,
  onClick,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classnames({
        [classes.button]: true,
        [classes[`button-${buttonSizeMap[size]}`]]: true,
        [classes[`button-${buttonVariantToClassName[variant]}`]]: true,
        [classes.disabled]: disabled,
      })}
      type={type}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
