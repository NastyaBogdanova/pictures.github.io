import {PopUp} from './PopUp.js';

export class PopUpPicture extends PopUp {
    constructor(popUp) {
      super(popUp);
    }
  
    open(link) {
      this.togglePopUp();
      const placeCardImg = this.popUp.querySelector(".popup__picture");
      placeCardImg.src = link;
    }
  
    setPicturePopUpCloseListener() {
      const popupClosePicture = this.popUp.querySelector(".popup_close_picture");
      popupClosePicture.addEventListener("click", () => this.togglePopUp());
    }
  }