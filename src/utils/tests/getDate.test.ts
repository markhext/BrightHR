import { expect, test } from "vitest";
import { getEndDate, getStartDate } from "../getDate";

test("Formats start date currectly", () => {
  const formattedStartDate = getStartDate("2021-04-02T17:30:46.989Z");
  expect(formattedStartDate).toBe("Fri, 2 Apr 2021");
});

test("Formats end date currectly and increaments days", () => {
  const formattedStartDate = getEndDate("2024-01-01T17:30:46.989Z", 14);
  expect(formattedStartDate).toBe("Mon, 15 Jan 2024");
});
