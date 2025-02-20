import { UseFormRegisterReturn } from "react-hook-form";
import RequiredLabel from "@pages/Recruiting/components/RequiredLabel";

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
}

const InputField = ({
  id,
  label,
  placeholder,
  type,
  register,
}: InputFieldProps) => (
  <div className="flex flex-col gap-3">
    <RequiredLabel htmlFor={id}>{label}</RequiredLabel>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      {...register}
      className="focus:border-primary caption2 w-full rounded-md border border-gray-300 p-3 focus:outline-none"
    />
  </div>
);

export default InputField;
