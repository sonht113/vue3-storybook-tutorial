export const formatDateToString = (date: Date | string) => {
  if (typeof date === "string") {
    date = new Date(date);
  }
  let day: string | number = date.getDate();
  let month: string | number = date.getMonth() + 1;
  let year: string | number = date.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return month + "/" + day + "/" + year;
};
