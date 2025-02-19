import { ReactNode } from "react";

interface RequiredLabelProps {
  children: ReactNode;
}

const RequiredLabel = ({ children }: RequiredLabelProps) => {
  return (
    <p className="font-medium text-black">
      {children}
      <span className="text-red-500"> *</span>
    </p>
  );
};

export default RequiredLabel;
