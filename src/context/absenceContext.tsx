import { createContext, useReducer } from "react";
import type { FC, ReactNode } from "react";

import type { ResponseType } from "../App";

export type Actions =
  | { type: "SORT_BY_NAME" }
  | { type: "SORT_BY_ABSENCE" }
  | { type: "SORT_BY_DATE" };

type DispatchType = (action: Actions) => void;

const reducer = (state: ResponseType[], action: Actions) => {
  switch (action.type) {
    case "SORT_BY_DATE":
      return [...state].sort((a, b) => {
        return (
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        );
      });

    case "SORT_BY_NAME":
      return [...state].sort((a, b) => {
        const nameA = a.employee.firstName.toUpperCase(); // ignore upper and lowercase
        const nameB = b.employee.firstName.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });

    case "SORT_BY_ABSENCE":
      return [...state].sort((a, b) => {
        const nameA = a.absenceType.toUpperCase(); // ignore upper and lowercase
        const nameB = b.absenceType.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });

    default:
      return state;
  }
};

export const AbsenceContext = createContext<
  { state: ResponseType[]; dispatch: DispatchType } | undefined
>(undefined);

export const AbsenceContextProvider: FC<{
  children: ReactNode;
  initState: ResponseType[];
}> = ({ children, initState }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const value = { state, dispatch };
  return (
    <AbsenceContext.Provider value={value}>{children}</AbsenceContext.Provider>
  );
};
