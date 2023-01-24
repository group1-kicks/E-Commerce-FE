import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder: string;
}

function Input({ placeholder, id, ...props }: Props) {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="input input-sm input-ghost w-full max-w-xs"
      {...props}
    />
  );
}

export default Input;
