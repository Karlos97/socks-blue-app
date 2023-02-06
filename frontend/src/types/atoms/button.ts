export const buttonVariantToClassName = {
  outline: "outline",
  blue: "blue",
  dark: "dark",
  text: "text",
};
export const buttonSizeMap = {
  default: "",
  small: "small",
  medium: "medium",
};
export interface ButtonProps {
  variant?: keyof typeof buttonVariantToClassName;
  size?: keyof typeof buttonSizeMap;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  type?: "submit" | "reset" | "button";
  children?: React.ReactNode;
}
