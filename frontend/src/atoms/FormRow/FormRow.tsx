import { classnames } from "src/helpers/classnames";
import { FormRowProps } from "src/types/atoms/formRow";
import classes from "./formRow.module.scss";

const FormRow = ({ children, className = "", errorMsg = [] }: FormRowProps) => {
  return (
    <div
      className={classnames({
        [classes["form-row"]]: true,
        [className]: className.length > 0,
      })}
    >
      {children}
      {errorMsg?.map((text: string, index: number) => (
        <p key={`${text}-${index}`} className={classes.error}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default FormRow;
