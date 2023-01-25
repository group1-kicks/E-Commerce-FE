import { FC, InputHTMLAttributes } from "react";

import { Input } from "react-daisyui";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  min?: string;
}

export function InputForm({ placeholder, type, min }: InputFormProps) {
  return (
    <div>
      <Input
        className="bg-form w-full"
        placeholder={placeholder}
        type={type}
        min={min}
      />
    </div>
  );
}
