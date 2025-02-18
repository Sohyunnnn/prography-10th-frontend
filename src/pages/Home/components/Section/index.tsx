import { ReactNode } from "react";
interface SectionProps {
  children: ReactNode;
  className?: string;
}
const Section = ({ children, className = "" }: SectionProps) => (
  <div
    className={`flex h-full min-h-screen flex-col items-center justify-center ${className}`}
  >
    {children}
  </div>
);
export default Section;
