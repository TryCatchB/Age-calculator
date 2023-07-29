import { days, months, years } from "./data.js";
import { calculateAge, checkAnswer } from "./functions.js";

const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const button = document.querySelector("button");
const fieldDay = document.querySelector("#field-day");
const fieldMonth = document.querySelector("#field-month");
const fieldYear = document.querySelector("#field-year");

const dataObjcet = {
  birthDay: 0,
  birthMonth: 0,
  birthYear: 0,
};

button.addEventListener("click", () => {
  const userDay = Number(inputDay.value);
  const userMonth = Number(inputMonth.value);
  const userYear = Number(inputYear.value);

  const day = checkAnswer(
    userDay,
    fieldDay,
    inputDay,
    dataObjcet.birthDay,
    days,
    "Must be a valid day"
  );

  const month = checkAnswer(
    userMonth,
    fieldMonth,
    inputMonth,
    dataObjcet.birthMonth,
    months,
    "Must be a valid month"
  );

  const year = checkAnswer(
    userYear,
    fieldYear,
    inputYear,
    dataObjcet.birthYear,
    years,
    "Must be in the past"
  );

  if (day && month && year) {
    const dataBirthDay = new Array(day, month, year);
    calculateAge(dataBirthDay);
  }
});
