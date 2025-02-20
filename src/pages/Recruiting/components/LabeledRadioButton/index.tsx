import { ReactNode } from "react";

interface LabeledRadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

const LabeledRadioButton = ({
  id,
  name,
  value,
  label,
  onChange,
  checked,
}: LabeledRadioButtonProps) => {
  return (
    <label
      htmlFor={id}
      className="caption2 flex items-center gap-2 rounded-md border border-gray-300 p-3"
    >
      <input
        id={id}
        type="radio"
        name={name}
        className="border p-2"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default LabeledRadioButton;
