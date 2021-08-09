// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }


const inputEl = document.querySelector("#validation-input");



const onInputBlur = (event) => {
  const classList = event.currentTarget.classList;
  if (
    Number(event.currentTarget.dataset.length) ===
    event.currentTarget.value.length
  ) {
    classList.remove("invalid");
    classList.add("valid");
  } else if (event.currentTarget.value.length === 0) {
    classList.remove("invalid");
    classList.remove("valid");
  } else {
    classList.remove("valid");
    classList.add("invalid");
  }
};

inputEl.addEventListener("blur", onInputBlur);
