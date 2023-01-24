import { FC, ButtonHTMLAttributes } from "react";

import { Button } from "react-daisyui";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: JSX.Element;
  className?: string;
  disabled?: boolean;
}

export function Btn({ label, className, disabled, icon }: ButtonProps) {
  return (
    <Button
      className={`bg-btn text-white hover:bg-btnh border-none rounded-full w-full ${className}`}
    >
      {label} {icon}
    </Button>
  );
}

export function Btns({ label, className, disabled, icon }: ButtonProps) {
  return (
    <Button
      className={`bg-btns text-white hover:bg-btnsh border-none rounded-full w-full ${className}`}
    >
      {label} {icon}
    </Button>
  );
}
