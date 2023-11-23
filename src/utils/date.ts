import dayjs from "dayjs";

export const formatDateToString = (date: string, format?: string) => {
  if (!date) return "";

  return dayjs(date).format((format = "DD/MM/YYYY"));
};
