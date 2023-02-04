import { LabelProps } from "src/types/atoms/label";
import classes from "./label.module.scss";

const Label = ({ htmlFor = "", children, className = "" }: LabelProps) =>
  htmlFor ? (
    <label className={`${classes.label} ${className}`} htmlFor={htmlFor}>
      {children}
    </label>
  ) : (
    <span className={`${classes.label} ${className}`}>{children}</span>
  );

export { Label };
