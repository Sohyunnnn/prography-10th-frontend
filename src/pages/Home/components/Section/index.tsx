import { ReactNode, forwardRef } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}
const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, className = "" }: SectionProps, ref) => (
    <div
      ref={ref}
      className={`flex h-full flex-col items-center justify-center ${className}`}
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      {children}
    </div>
  ),
);
export default Section;
