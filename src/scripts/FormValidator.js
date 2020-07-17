export class FormValidator {
  constructor(form) {
    this.form = form;
  }

  _checkInputValidity(input) {
    const errorMessages = {
      empty: "Это обязательное поле",
      wrongLength: "Должно быть от 2 до 30 символов",
      wrongUrl: "Здесь должна быть ссылка",
    };
    const errorElem = input.nextElementSibling;
    if (input.validity.valueMissing) {
      errorElem.textContent = errorMessages.empty;
    } else if (input.validity.tooShort || input.validity.tooLong) {
      errorElem.textContent = errorMessages.wrongLength;
    } else {
      errorElem.textContent = " ";
    }
  }

  _setSubmitButtonState(form) {
    const button = form.querySelector(".button");
    if (form.checkValidity()) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", true);
    }
  }

  _handleInputChange(event) {
    const currentForm = event.currentTarget;
    const currentInput = event.target;

    this._checkInputValidity(currentInput);

    this._setSubmitButtonState(currentForm);
  }

  resetForm() {
    this.form.reset();
    this.form
      .querySelector(".popup_button_add-place")
      .setAttribute("disabled", true);
  }

  setInputListener() {
    this.form.addEventListener("input", () => this._handleInputChange(event));
  }
}
