interface StepButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  text: string;
  className?: string;
}

const StepButton: React.FC<StepButtonProps> = ({
  onClick,
  disabled,
  text,
  className = "",
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`rounded-md px-4 py-2 ${className} ${disabled ? "bg-gray-300 text-gray-500" : "bg-primary"}`}
  >
    {text}
  </button>
);

export default StepButton;
