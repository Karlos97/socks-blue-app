export const buttonVariantToClassName = {
  outline: "button-outline",
  blue: "button-blue",
};

export interface ButtonProps {
  variant?: keyof typeof buttonVariantToClassName;
  disabled?: boolean;
  size?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  type?: "submit" | "reset" | "button";
  children?: React.ReactNode;
}
