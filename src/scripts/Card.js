export class Card {
  constructor(name, link, likes, popUp) {
    this.name = name;
    this.link = link;
    this.likes = likes;
    this.popUp = popUp;
  }

  create() {
    const placeCard = document.createElement("div");
    placeCard.classList.add("place-card");

    const cardImage = document.createElement("div");
    cardImage.classList.add("place-card__image");

    cardImage.style.backgroundImage = `url(${this.link})`;

    const deleteIcon = document.createElement("button");
    deleteIcon.classList.add("place-card__delete-icon");

    const cardDescription = document.createElement("div");
    cardDescription.classList.add("place-card__description");

    const cardName = document.createElement("h3");
    cardName.classList.add("place-card__name");
    cardName.textContent = this.name;

    const likeContainer = document.createElement("div");
    likeContainer.classList.add("place-card__like-container");

    const likeIcon = document.createElement("button");
    likeIcon.classList.add("place-card__like-icon");

    const likeCounter = document.createElement("p");
    likeCounter.classList.add("place-card__like-counter");
    likeCounter.textContent = this.likes.length;

    cardDescription.appendChild(cardName);
    cardDescription.appendChild(likeContainer);
    likeContainer.appendChild(likeIcon);
    likeContainer.appendChild(likeCounter);
    cardImage.appendChild(deleteIcon);
    placeCard.appendChild(cardImage);
    placeCard.appendChild(cardDescription);

    this.cardElement = placeCard;

    return placeCard;
  }

  _like(event) {
    event.target.classList.toggle("place-card__like-icon_liked");
  }

  _remove(event) {
    const currentCard = event.target.closest(".place-card");
    currentCard.remove();
    event.stopPropagation();
  }

  _handlePreviewPicture() {
    this.popUp.open(this.link);
  }

  setCardListeners() {
    this.cardElement
      .querySelector(".place-card__like-icon")
      .addEventListener("click", this._like);
    this.cardElement
      .querySelector(".place-card__delete-icon")
      .addEventListener("click", this._remove);
    this.cardElement
      .querySelector(".place-card__image")
      .addEventListener("click", () => this._handlePreviewPicture());
  }
}