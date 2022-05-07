const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

module.exports = {
  transformDay: (dateDb) => {
    let date = dayjs(dateDb).utc().format("YYYY-MM-DD HH:mm:ss");
    let currentDate = `${date.slice(0, 10)} ${
      Number(date.slice(11, 13)) + 5 > 24
        ? -1 * (24 - (Number(date.slice(11, 13)) + 5)) + date.slice(13)
        : Number(date.slice(11, 13)) + 5 + date.slice(13)
    }`;

    return currentDate;
  },
};
