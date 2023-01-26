import { FC, InputHTMLAttributes } from "react";

interface FormProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  id?: string;
  min?: string;
}

export const InputForm: FC<FormProps> = ({ id, title, min, ...props }) => {
  return (
    <div className="my-3">
      <p className="my-1 font-bold text-lg">{title}</p>
      <input
        id={id}
        min={min}
        className="bg-form w-full p-3 rounded-lg "
        {...props}
      />
    </div>
  );
};
