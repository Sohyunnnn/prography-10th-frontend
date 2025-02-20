import { ReactNode } from "react";

interface LabeledRadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: ReactNode;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabeledRadioButton = ({
  id,
  name,
  value,
  label,
  checked,
  onChange,
}: LabeledRadioButtonProps) => {
  return (
    <div className="flex items-center gap-2 rounded-md border border-gray-300 p-3">
      <input
        id={id}
        type="radio"
        name={name}
        className="border p-2"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="caption2">
        {label}
      </label>
    </div>
  );
};

export default LabeledRadioButton;
