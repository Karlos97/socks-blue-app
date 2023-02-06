export interface InputProps {
  err?: boolean;
  id?: string;
  type?: string;
  variant?: "input" | "textarea";
  className?: string;
  accept?: string;
  onChange?: (e: any) => void;
  value?: string | number;
  placeholder?: string;
}
