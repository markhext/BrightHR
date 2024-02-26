import type { ResponseType } from "../App";

export const sortByDate = (state: ResponseType[]): ResponseType[] => {
  return [...state].sort((a, b) => {
    return (
      new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
  };
