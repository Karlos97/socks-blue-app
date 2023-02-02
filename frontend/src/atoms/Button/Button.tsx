import {
  ButtonProps,
  buttonVariantToClassName,
} from "../../types/atoms/button";
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

const DropdownButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      id="dropdownCheckboxButton"
      data-dropdown-toggle="dropdownDefaultCheckbox"
      className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      type="button"
      onClick={onClick}
    >
      Dropdown checkbox
      <svg
        className="ml-2 w-4 h-4"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>
  );
};

export { Button, DropdownButton };
