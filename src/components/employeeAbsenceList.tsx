import { FC } from "react";
import { useAbsenceData } from "../hooks/useAbsenceData";
import { Absence } from "./absence";
import { getEndDate, getStartDate } from "../utils/getDate";

const EmployeeAbsenceList: FC<{ id: string }> = ({ id }) => {
  const { state } = useAbsenceData();

  const absences = state.filter((item) => {
    return item.employee.id === id;
  });

  return (
    <ul className="grid space-y-1 pl-6 pr-3 text-xs">
      {absences.map((item) => {
        return (
          <li className="flex items-center gap-16 py-1" key={item.id}>
            <Absence type={item.absenceType} />
            <div className="grid flex-grow grid-cols-2 text-left">
              <p>{getStartDate(item.startDate)}</p>
              <p>{getEndDate(item.startDate, item.days)}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default EmployeeAbsenceList;
