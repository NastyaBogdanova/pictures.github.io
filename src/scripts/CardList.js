export class CardList {
  constructor(container, callback, api) {
    this.container = container;
    this.callback = callback;
    this.api = api;
  }

  addCard(cardElement) {
    this.container.appendChild(cardElement);
  }

  render() {
    this.api
      .getInitialCards()
      .then((result) => {
        result.forEach((item) => {
          this.callback(item);
        });
      })
      .catch((err) => console.log(err));
  }
}