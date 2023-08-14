export function checkAnswer(
  userValue,
  fieldItem,
  inputItem,
  dataObjcetItem,
  array,
  errorMessage
) {
  if (userValue === 0) {
    showErrorMessage(fieldItem, inputItem, "This field is required");
  } else if (userValue) {
    dataObjcetItem = findCorrectValue(array, userValue);

    if (dataObjcetItem === undefined) {
      showErrorMessage(fieldItem, inputItem, errorMessage);
    }

    return dataObjcetItem;
  }
}

function showErrorMessage(fieldForm, inputForm, errorMessage) {
  if (!fieldForm.querySelector(".error-empty")) {
    fieldForm.insertAdjacentHTML(
      "beforeend",
      `<p class="error-empty">${errorMessage}</p>`
    );
    fieldForm.querySelector(".form__label").classList.add("empty-error");
    inputForm.classList.add("empty-error");
  }
}

function findCorrectValue(array, userValue) {
  const correctValue = array.find((item) => item === userValue);
  return correctValue;
}

export function calculateAge(dataBirthDay) {
  const birth = dataBirthDay.toReversed().join("-");

  const dataTime = {
    birthDate: new Date(birth),
    currentDate: new Date(),
  };

  countYears(dataTime);

  countMonts(dataTime);

  countDays(dataTime);
}

function countDays({ birthDate, currentDate }) {
  const nextBirthday = new Date(
    currentDate.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  if (nextBirthday < currentDate) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }

  const hoursInDay = 24;
  const minutesInHour = 60;
  const secsInMinute = 60;
  const milliSecInSec = 1000;

  const millSecInOneDay =
    hoursInDay * minutesInHour * secsInMinute * milliSecInSec;

  const daysDiff = Math.floor((nextBirthday - currentDate) / millSecInOneDay);

  const days = document.querySelector(".days").querySelector("span");
  days.innerText = daysDiff;
}

function countMonts({ birthDate, currentDate }) {
  const nextBirthday = new Date(
    currentDate.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  if (nextBirthday < currentDate) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }
  const AllMonths = 12;
  const monthsDiff =
    (nextBirthday.getFullYear() - currentDate.getFullYear()) * AllMonths +
    (nextBirthday.getMonth() - currentDate.getMonth());

  const months = document.querySelector(".months").querySelector("span");
  months.innerText = monthsDiff;
}

function countYears({ birthDate, currentDate }) {
  const ageInMilliseconds = currentDate - birthDate;

  const millSecInSec = 1000;
  const secsInMinute = 60;
  const minutesInHour = 60;
  const hoursInDay = 24;
  const daysInYear = 365.25;

  const ageInYears = Math.floor(
    ageInMilliseconds /
      (millSecInSec * secsInMinute * minutesInHour * hoursInDay * daysInYear)
  );

  const years = document.querySelector(".years").querySelector("span");
  years.innerText = ageInYears;
}
