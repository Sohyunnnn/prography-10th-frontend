import React from "react";

interface BadgeProps {
  label: string;
  type: "PO" | "DE" | "DEV";
}

const Badge: React.FC<BadgeProps> = ({ label, type }) => {
  let badgeClass = "";

  if (type === "PO") {
    badgeClass = "bg-tertiary";
  } else if (type === "DE") {
    badgeClass = "bg-secondary";
  } else if (type === "DEV") {
    badgeClass = "bg-primary";
  }

  return (
    <div
      className={`title1 inline-flex w-auto items-center rounded-3xl px-6 py-3 ${badgeClass}`}
    >
      {label}
    </div>
  );
};

export default Badge;
