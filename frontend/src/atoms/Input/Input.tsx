import { forwardRef, useRef } from "react";
import { classnames } from "src/helpers/classnames";
import { InputProps } from "src/types/atoms/input";
import classes from "./input.module.scss";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      err = false,
      type = "number",
      variant = "input",
      className = "",
      placeholder = "",
      value = "",
      id = "",
      onChange = () => {
        return;
      },
    },
    ref
  ) => {
    const inputRef = ref || useRef<HTMLInputElement>(null);

    return variant == "input" ? (
      <input
        ref={inputRef}
        className={classnames({
          [classes.input]: true,
          [classes.error]: err,
          [className]: className !== "",
        })}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    ) : (
      <textarea
        className={classnames({
          [classes.textarea]: true,
          [classes.error]: err,
          [className]: className !== "",
        })}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    );
  }
);

export default Input;
