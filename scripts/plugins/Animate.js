export default class Animate {
  constructor() {
    this.items = document.querySelectorAll("[data-anime]");
    this.init();
  }

  animateItems() {
    this.items.forEach((item) => {
      const time = Number(item.dataset.anime);
      if (!isNaN(time)) {
        setTimeout(() => {
          item.classList.add("anime");
        }, time);
      }
    });
  }

  handleVisibility = () => {
    if (document.visibilityState === "visible") {
      this.animateItems();
    }
  };

  init() {
    this.handleVisibility();
    document.addEventListener("visibilitychange", this.handleVisibility);
  }
}
