import {PopUp} from './PopUp.js';

export class PopUpNew extends PopUp {
  constructor(popUp, callBack, api, name, link, form) {
    super(popUp);
    this.callBack = callBack;
    this.api = api;
    this.name = name;
    this.link = link;
    this.form = form;
  }

  submit(event) {
    this.api
      .postUserCard(this.name.value, this.link.value)
      .then((result) => {
        this.callBack(result.name, result.link, result.likes);
        this.togglePopUp();
        this.form.resetForm();
      })
      .catch((err) => console.log(err));
  }

  setAddCardPopUpCloseListener() {
    const popupClosePlace = this.popUp.querySelector(".popup_close_place");
    popupClosePlace.addEventListener("click", () => {
      const error = this.popUp.querySelectorAll(".error");
      this.togglePopUp();
      error.forEach((elem) => {
        elem.textContent = " ";
      });
      this.form.resetForm();
    });
  }

  setAddCardOpenListener() {
    const userInfoButton = document.querySelector(".user-info__button");
    userInfoButton.addEventListener("click", () => this.togglePopUp());
  }
}