import React, { type FC } from "react";
import { useAbsenceData } from "../hooks/useAbsenceData";

type ActionTypes = "SORT_BY_DATE" | "SORT_BY_NAME" | "SORT_BY_ABSENCE";

type SortByOptionProps = {
  action: ActionTypes;
  label: string;
  defaultChecked?: boolean;
};

const SortAbsence = () => {
  return (
    <fieldset className="mt-6 grid gap-3 text-base font-medium lg:max-w-lg">
      <legend className="py-3 text-zinc-500">Sort order</legend>
      <SortByOption action="SORT_BY_DATE" label="Sort by date" />
      <SortByOption action="SORT_BY_NAME" label="Sort by name" />
      <SortByOption action="SORT_BY_ABSENCE" label="Sort by absence" />
    </fieldset>
  );
};

const SortByOption: FC<SortByOptionProps> = ({
  action,
  label,
  defaultChecked = false,
}) => {
  const { dispatch } = useAbsenceData();

  const selectSortOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: event.currentTarget.value as ActionTypes });
  };

  return (
    <label className="flex gap-3 rounded-md border bg-white p-5 duration-200 has-[:checked]:border-indigo-200 has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200">
      <input
        defaultChecked={defaultChecked}
        className="checked:border-indigo-500"
        name="sort_absence"
        onChange={selectSortOption}
        type="radio"
        defaultValue={action}
      />
      <span>{label}</span>
    </label>
  );
};

export default SortAbsence;
