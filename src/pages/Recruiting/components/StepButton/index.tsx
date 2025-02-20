interface StepButtonProps {
  onClick: () => void;
  disabled: boolean;
  text: string;
  additionalStyles?: string;
}

const StepButton: React.FC<StepButtonProps> = ({
  onClick,
  disabled,
  text,
  additionalStyles = "",
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`rounded-md px-4 py-2 ${additionalStyles} ${disabled ? "cursor-not-allowed bg-gray-300 text-gray-500" : "bg-primary"}`}
  >
    {text}
  </button>
);

export default StepButton;
