import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function transformDate(dateDb) {
  let date = dayjs(dateDb).utc().format("DD-MM-YYYY HH:mm");
  console.log(date, "datedb");
  let currentDate = `${date.slice(0, 10)} ${
    //si le resto -3 me da la hra de argentina
    Number(date.slice(11, 13)) - 3 + date.slice(13)
  }`;
  console.log(currentDate, 121212);
  return currentDate;
}
