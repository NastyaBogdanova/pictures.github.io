  import './pages/index.css';
  import {Api} from './scripts/Api.js';
  import {Card} from './scripts/Card.js';
  import {CardList} from './scripts/CardList.js';
  import {FormValidator} from './scripts/FormValidator.js';
  import {PopUpEdit} from './scripts/PopUpEdit.js';
  import {PopUpNew} from './scripts/PopUpNew.js';
  import {PopUpPicture} from './scripts/PopUpPicture.js';
  import {UserInfo} from './scripts/UserInfo.js';

(function () {
  const addName = document.querySelector("#name");
  const link = document.querySelector("#link");
  const name = document.querySelector(".user-info__name");
  const info = document.querySelector(".user-info__job");
  const avatar = document.querySelector(".user-info__photo");
  const API_URL = NODE_ENV === 'production' ? 'https://praktikum.tk' : 'http://praktikum.tk';

  const config = {
    baseUrl: `${API_URL}/cohort11`,
    headers: {
      authorization: "278cc6e5-7388-467f-ab3e-8b115c22a86b",
      "Content-Type": "application/json",
    },
  };

  const api = new Api(config);

  const placesList = new CardList(
    document.querySelector(".places-list"),
    startCardsCallBack,
    api
  );

  const editForm = new FormValidator(document.forms.edit);
  const addForm = new FormValidator(document.forms.new);

  const addCardPopup = new PopUpNew(
    document.querySelector(".popup_type_place"),
    addCardCallBack,
    api,
    addName,
    link,
    addForm
  );

  const editPopup = new PopUpEdit(document.querySelector(".popup_type_user"));
  
  const picturePopup = new PopUpPicture(
    document.querySelector(".popup_type_picture")
  );

  const userInfo = new UserInfo(
    document.querySelector("#username"),
    document.querySelector("#aboutuser"),
    name,
    info,
    avatar,
    api,
    editPopup
  );

  function addCardCallBack(name, link, likes) {
    const card = new Card(name, link, likes, picturePopup);
    placesList.addCard(card.create());
    card.setCardListeners();
  }

  function startCardsCallBack(item) {
    const card = new Card(item.name, item.link, item.likes, picturePopup);
    placesList.addCard(card.create());
    card.setCardListeners();
  }

  placesList.render();
  userInfo.setDefaultUserInfo();
  editPopup.setEditPopUpCloseListener();
  picturePopup.setPicturePopUpCloseListener();
  addCardPopup.setAddCardOpenListener();
  addCardPopup.setAddCardPopUpCloseListener();
  editForm.setInputListener();
  addForm.setInputListener();

  document.forms.edit.addEventListener("submit", () => {
    event.preventDefault();
    userInfo.updateUserInfo();
  });

  document.forms.new.addEventListener("submit", () => {
    event.preventDefault();
    addCardPopup.submit();
  });

  document.querySelector(".user-info__edit").addEventListener("click", () => {
    editPopup.togglePopUp();
    userInfo.setUserInfo();
  });
})();