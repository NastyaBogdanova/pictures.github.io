import {PopUp} from './PopUp.js';

export class PopUpEdit extends PopUp {
  constructor(popUp) {
    super(popUp);
  }

  closeEditPopUp() {
    this.togglePopUp();
    this.popUp.querySelector("#editUser").setAttribute("disabled", true);
  }

  setEditPopUpCloseListener() {
    const popupCloseEdit = this.popUp.querySelector(".popup_close_edit");
    popupCloseEdit.addEventListener("click", () => {
      const error = this.popUp.querySelectorAll(".error");
      const buttonEditUser = this.popUp.querySelector("#editUser");
      this.togglePopUp();
      error.forEach((elem) => {
        elem.textContent = " ";
      });
      buttonEditUser.setAttribute("disabled", true);
    });
  }
}