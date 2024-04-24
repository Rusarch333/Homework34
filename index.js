/*
  Написати функцію, яка буде повертати об'єкт родина.
  Ключ - член родини
  Значення - ім'я
  В родині повинно бути як мінімум 2 особи, можна запитати в користувача скільки особ в його родині.
  І всі данні (і ключ і значення) вносяться через prompt

  const family = {
    'mather': 'Olena',
    'cat': 'Ray'
  };
*/

/**
 * Функція перевіряє ввід користувача на "" або null
 * @param {*} value
 * @returns {boolean}
 */
const isEmptyOrNullCheck = function (value) {
  return value === "" || value === null;
};

/**
 * Функція перевіряє ввід користувача на відповідність до цілого числа
 * Повертає true, якщо параметр не може привестись або не є цілим числом
 * @param {*} input
 * @returns {boolean}
 */
const isUserInputIntNumberErrorCheck = function (input) {
  const inputNumber = Number(input);
  return isEmptyOrNullCheck(input) === true || Number.isNaN(inputNumber) || Number.isInteger(inputNumber) === false;
};

const getFamily = function () {
  let familyMembersAmount = 0;

  // Введення кількості людей у родині
  while (true) {
    familyMembersAmount = prompt(
      "Будь ласка, введіть скільки людей у вашій родині:"
    );

    if (isUserInputIntNumberErrorCheck(familyMembersAmount)) {
      alert(
        "Помилка! Для продовження введіть коректну кількість людей у родині!"
      );
      familyMembersAmount = 0;
      continue;
    }
    if (familyMembersAmount >= 2) {
      break;
    }
    alert("Помилка! В родині має бути щонайменше 2 особи!");
  }

  let familyPropertyName;
  let familyPropertyValue;
  let family = {};

  // Заповнення об'єкту family інформацією
  for (let i = 0; i < familyMembersAmount; i++) {
    // Введення ким є поточний член родини
    while (true) {
      familyPropertyName = prompt(
        "Будь ласка, введіть ким є член родини №" + (i + 1) + ":"
      );

      if (isEmptyOrNullCheck(familyPropertyName) === false) {
        break;
      }

      alert("Помилка! Введіть коректно ким є поточний член родини!");
    }

    // Введення ім'я члену родини
    while (true) {
      familyPropertyValue = prompt(
        "Введіть ім'я члену родини №" + (i + 1) + ":"
      );

      if (isEmptyOrNullCheck(familyPropertyValue) === false) {
        break;
      }

      alert("Помилка! Введіть коректно ім'я поточного члена родини!");
    }

    family[familyPropertyName] = familyPropertyValue;
  }

  return family;
};

console.log(getFamily());
alert(
  "Дякую! Створення об'єкта family завершено, інформацію можна передивитись у консолі!"
);
