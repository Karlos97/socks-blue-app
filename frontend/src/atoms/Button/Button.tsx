import { ButtonProps, buttonVariantToClassName } from "src/types/atoms/button";
import classes from "./button.module.scss";

const Button = ({
  variant = "outline",
  disabled = false,
  size = "medium",
  children,
  onClick,
  type = "button",
  href = "",
  ...props
}: ButtonProps) => {
  if (href) {
    return (
      <a
        className={`${classes["button"]} ${classes[`button-${size}`]} ${
          disabled ? classes["disabled"] : ""
        } ${variant ? classes[buttonVariantToClassName[variant]] : ""}`}
        aria-disabled={disabled}
        role="button"
        href={href}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={`${classes["button"]} ${classes[`button-${size}`]} ${
        disabled ? classes["disabled"] : ""
      } ${variant ? classes[buttonVariantToClassName[variant]] : ""}`}
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
