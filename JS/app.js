import { days, months, years } from "./data.js";
import { calculateAge, checkAnswer } from "./functions.js";

const inputFields = {
  day: document.querySelector("#day"),
  month: document.querySelector("#month"),
  year: document.querySelector("#year"),
};

const fields = {
  day: document.querySelector("#field-day"),
  month: document.querySelector("#field-month"),
  year: document.querySelector("#field-year"),
};

const dateRanges = { day: days, month: months, year: years };

const errorMessages = {
  day: "Must be a valid day",
  month: "Must be a valid month",
  year: "Must be in the past",
};

const dataObject = {
  birthDay: 0,
  birthMonth: 0,
  birthYear: 0,
};

const button = document.querySelector("button");

function createDataObject(type, userValue) {
  return {
    userValue,
    field: fields[type],
    input: inputFields[type],
    birthDate: dataObject[`birth${capitalize(type)}`],
    array: dateRanges[type],
    errorMessage: errorMessages[type],
  };
}

// Capitalize the first letter of a string (for object key matching)
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

button.addEventListener("click", () => {
  const userValues = {
    day: Number(inputFields.day.value),
    month: Number(inputFields.month.value),
    year: Number(inputFields.year.value),
  };

  const validatedDate = ["day", "month", "year"].map((type) =>
    checkAnswer(createDataObject(type, userValues[type]))
  );

  if (validatedDate.every(Boolean)) {
    const [day, month, year] = validatedDate;
    const birthDate = [day, month, year];
    calculateAge(birthDate);
  }
});
