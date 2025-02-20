import { ReactNode } from "react";

interface RequiredLabelProps {
  children: ReactNode;
}

const RequiredLabel = ({ children }: RequiredLabelProps) => {
  return (
    <p className="body2 font-medium text-white">
      {children}
      <span className="text-red-500"> *</span>
    </p>
  );
};

export default RequiredLabel;
