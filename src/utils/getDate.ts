export const getStartDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-GB", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const getEndDate = (date: string, addDays: number) => {
  return new Date(
    new Date(date).setDate(new Date(date).getDate() + addDays),
  ).toLocaleDateString("en-GB", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
