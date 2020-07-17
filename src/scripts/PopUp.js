export class PopUp {
  constructor(popUp) {
    this.popUp = popUp;
  }

  togglePopUp() {
    this.popUp.classList.toggle("popup_is-opened");
  }
}

