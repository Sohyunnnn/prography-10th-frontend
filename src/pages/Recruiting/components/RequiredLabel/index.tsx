import { ReactNode } from "react";

interface RequiredLabelProps {
  children: ReactNode;
  htmlFor?: string;
}

const RequiredLabel = ({ children, htmlFor }: RequiredLabelProps) => {
  return (
    <label htmlFor={htmlFor} className="caption3 font-medium text-white">
      {children}
      <span className="text-red-500"> *</span>
    </label>
  );
};

export default RequiredLabel;
