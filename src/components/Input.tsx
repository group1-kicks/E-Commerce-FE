import { FC, InputHTMLAttributes } from "react";

interface FormProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  id: string;
}

export const InputForm: FC<FormProps> = ({
  id,
  title,
  ...props
}) => {
  return (
    <div className="my-3">
      <p className="my-1">{title}</p>
      <input
        id={id}
        className="bg-form w-full p-3 rounded-lg "
        {...props}
      />
    </div>
  );
};
