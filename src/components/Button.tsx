import { FC, ButtonHTMLAttributes } from "react";

import { Button } from "react-daisyui";
import { icons } from "react-icons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: JSX.Element;
  className?: string;
  disabled?: boolean;
}

export function Btn({ label, className, disabled, icon }: ButtonProps) {
  return (
    <Button className="bg-btn text-white hover:bg-btnh border-none rounded-full">
      {label} {icon}
    </Button>
  );
}
