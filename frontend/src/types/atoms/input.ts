export interface InputProps {
  disabled?: boolean;
  id?: string;
  type?: string;
  size?: string;
  childrenText?: string;
  className?: string;
  accept?: string;
  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
  placeholder?: string;
  href?: string;
  value?: number | string;
  minLength?: number;
  required?: boolean;
  children?: React.ReactNode;
}
