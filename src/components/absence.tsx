import type { FC } from "react";

type AbsenceType = "SICKNESS" | "ANNUAL_LEAVE" | "MEDICAL";

export const Absence: FC<{ type: AbsenceType }> = ({ type }) => {
  const getAbsenceTypeString = () => {
    switch (type) {
      case "SICKNESS":
        return "Sickness";
      case "ANNUAL_LEAVE":
        return "Annual leave";
      case "MEDICAL":
        return "Medical";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="rounded-full border px-3 py-0.5 text-xs">
      {getAbsenceTypeString()}
    </div>
  );
};
