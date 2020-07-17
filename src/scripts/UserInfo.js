export class UserInfo {
  constructor(userName, userInfo, name, Info, avatar, api, popUp) {
    this.userName = userName;
    this.userInfo = userInfo;
    this.name = name;
    this.Info = Info;
    this.avatar = avatar;
    this.api = api;
    this.popUp = popUp;
  }

  setDefaultUserInfo() {
    this.api
      .getUserInfo()
      .then((result) => {
        this.name.textContent = result.name;
        this.Info.textContent = result.about;
        this.avatar.style.backgroundImage = `url(${result.avatar})`;
      })
      .catch((err) => console.log(err));
  }

  setUserInfo() {
    this.api
      .getUserInfo()
      .then((result) => {
        this.userName.value = result.name;
        this.userInfo.value = result.about;
      })
      .catch((err) => console.log(err));
  }

  updateUserInfo() {
    this.api
      .patchUserInfo(this.userName.value, this.userInfo.value)
      .then((result) => {
        this.name.textContent = result.name;
        this.Info.textContent = result.about;
        this.popUp.closeEditPopUp();
      })
      .catch((err) => console.log(err));
  }
}