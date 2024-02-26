import { useContext } from "react";
import { AbsenceContext } from "../context/absenceContext";

export const useAbsenceData = () => {
  const context = useContext(AbsenceContext);
  if (context === undefined) {
    throw new Error("state must be used within a AbsenceContextProvider");
  }
  return context;
};
