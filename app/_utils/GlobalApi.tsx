const { default: axios } = require("axios");

const getAllStundent = () =>
  axios.get("https://run.mocky.io/v3/f23dd459-9ec8-4b11-a864-470e6d81b3a7");
const getAttendance = (grade: string, month: string) =>
  axios.get(
    "https://run.mocky.io/v3/9d469370-bc41-4527-ada7-a04e1433c4b9?grade=" +
      grade +
      "&month=" +
      month
  );

export default {
  getAllStundent,
  getAttendance,
};
