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
  const newBirth = birth.length === 9 ? birth.replace(/\-/, "-0") : birth;

  const dataTime = {
    birthDate: new Date(newBirth),
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

  const oneDay = 24 * 60 * 60 * 1000;
  const daysDiff = Math.floor((nextBirthday - currentDate) / oneDay);

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
  const monthsDiff =
    (nextBirthday.getFullYear() - currentDate.getFullYear()) * 12 +
    (nextBirthday.getMonth() - currentDate.getMonth());

  const months = document.querySelector(".months").querySelector("span");
  months.innerText = monthsDiff;
}

function countYears({ birthDate, currentDate }) {
  const ageInMilliseconds = currentDate - birthDate;
  const ageInYears = Math.floor(
    ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
  );
  const years = document.querySelector(".years").querySelector("span");
  years.innerText = ageInYears;
}
