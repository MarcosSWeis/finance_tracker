const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

module.exports = {
  transformDay: (dateDb) => {
    let date = dayjs(dateDb).utc().format("YYYY-MM-DD HH:mm:ss");
    let currentDate = `${date.slice(0, 10)} ${
      Number(date.slice(11, 13)) + 3 + date.slice(13)
    }`;
    console.log(currentDate, 121212);
    return currentDate;
  },
};