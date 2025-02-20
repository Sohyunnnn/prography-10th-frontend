import RequiredLabel from "@pages/Recruiting/components/RequiredLabel";
import { ChangeEvent } from "react";

interface InputFieldProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  type: string;
}

const InputField = ({
  id,
  name,
  value,
  onChange,
  label,
  placeholder,
  type,
}: InputFieldProps) => (
  <div className="flex flex-col gap-3">
    <RequiredLabel htmlFor={id}>{label}</RequiredLabel>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="focus:border-primary w-full rounded-md border border-gray-300 p-3 focus:outline-none"
      placeholder={placeholder}
    />
  </div>
);

export default InputField;
