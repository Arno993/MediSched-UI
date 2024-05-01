import {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  format,
} from "date-fns";
import { ViewType } from "../../components/navbar";

export const calculateDatesForView = (
  selectedDate: Date,
  viewType: ViewType
) => {
  switch (viewType) {
    case ViewType.Day:
      return {
        startDate: startOfDay(selectedDate).toISOString(),
        endDate: endOfDay(selectedDate).toISOString(),
      };
    case ViewType.Week:
    case ViewType.List:
      return {
        startDate: startOfWeek(selectedDate, { weekStartsOn: 1 }).toISOString(),
        endDate: endOfWeek(selectedDate, { weekStartsOn: 1 }).toISOString(),
      };
    case ViewType.Month:
      return {
        startDate: startOfMonth(selectedDate).toISOString(),
        endDate: endOfMonth(selectedDate).toISOString(),
      };
    default:
      return {
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
      };
  }
};

export const formatDateExcludingDay = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  return date.toLocaleDateString("en-US", options);
};

export const formatDate = (date: Date): string => {
  return format(date, "yyyy-MM-dd");
};
