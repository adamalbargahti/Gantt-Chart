/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs text-gray-500">{label}</label>
      <input
        type={type}
        {...register(name)}
        className={`${
          error ? "focus:ring-red-300" : "focus:ring-green-300"
        } ring-[1.5px] ring-gray-300  p-2 rounded-md text-sm w-full outline-none  `}
        {...inputProps}
        defaultValue={defaultValue}
        onChange={() => {
          console.log(defaultValue);
        }}
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
