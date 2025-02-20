import { ReactNode } from "react";

interface LabeledRadioButtonProps {
  id: string;
  value: string;
  label: ReactNode;
}

const LabeledRadioButton = ({
  id,
  value,
  label,
  ...rest
}: LabeledRadioButtonProps) => {
  return (
    <label
      htmlFor={id}
      className="caption2 flex items-center gap-2 rounded-md border border-gray-300 p-3"
    >
      <input
        id={id}
        type="radio"
        className="border p-2"
        value={value}
        {...rest}
      />
      {label}
    </label>
  );
};

export default LabeledRadioButton;
