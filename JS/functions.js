export function checkAnswer(data) {
  let { userValue, field, input, birthDate, array, errorMessage } = data;

  if (userValue === 0) {
    showErrorMessage(field, input, "This field is required");
  } else if (userValue) {
    birthDate = findCorrectValue(array, userValue);

    if (birthDate === undefined) {
      showErrorMessage(field, input, errorMessage);
    }

    return birthDate;
  }
}

function showErrorMessage(fieldForm, inputForm, errorMessage) {
  if (!fieldForm.querySelector(".error-empty")) {
    fieldForm.insertAdjacentHTML(
      "beforeend",
      `<p class="error-empty">${capitalize(errorMessage)}</p>`
    );
    fieldForm.querySelector(".form__label").classList.add("empty-error");
    inputForm.classList.add("empty-error");
  }
}

function findCorrectValue(array, userValue) {
  return array.find((item) => item === userValue);
}

export function calculateAge(dataBirthDay) {
  const birthDateStr = dataBirthDay.reverse().join("-"); // More readable reverse

  const dataTime = {
    birthDate: new Date(birthDateStr),
    currentDate: new Date(),
  };

  countYears(dataTime);
  countMonths(dataTime);
  countDays(dataTime);
}

function countDays({ birthDate, currentDate }) {
  let nextBirthday = new Date(
    currentDate.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  if (nextBirthday < currentDate) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }

  const daysDiff = Math.floor(
    (nextBirthday - currentDate) / (1000 * 60 * 60 * 24)
  );

  document.querySelector(".days span").innerText = daysDiff;
}

function countMonths({ birthDate, currentDate }) {
  let nextBirthday = new Date(
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

  document.querySelector(".months span").innerText = monthsDiff;
}

function countYears({ birthDate, currentDate }) {
  const ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
  document.querySelector(".years span").innerText = ageInYears;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
