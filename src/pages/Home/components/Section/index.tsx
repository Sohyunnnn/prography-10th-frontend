import { ReactNode } from "react";
interface SectionProps {
  children: ReactNode;
  className?: string;
}
const Section = ({ children, className = "" }: SectionProps) => (
  <div
    className={`flex h-full flex-col items-center justify-center ${className}`}
    style={{ minHeight: "calc(100vh - 80px)" }}
  >
    {children}
  </div>
);
export default Section;
