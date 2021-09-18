class Slider {
  constructor(target = document) {
    this.slides = target.getElementsByClassName("slide");
    this.prevBtn = target.querySelector(".slider__prevBtn");
    this.nextBtn = target.querySelector(".slider__nextBtn");
    this.slidesLength = this.slides.length;
    this.slideIndex = 0;
  }

  showSlides() {
    /* Show Slide By Slide Index */
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";
    }

    this.slides[this.slideIndex].style.display = "block";
  }

  prevBtnListener = (event) => {
    /* Previous Btton Listener */
    this.slideIndex -= 1;

    if (this.slideIndex < 0) {
      this.slideIndex = this.slidesLength - 1;
    }

    this.showSlides();
  };

  nextBtnListener = (event) => {
    /* Next Btton Listener */
    this.slideIndex += 1;

    if (this.slideIndex >= this.slidesLength) {
      this.slideIndex = 0;
    }

    this.showSlides();
  };

  init() {
    this.prevBtn.addEventListener("click", this.prevBtnListener);
    this.nextBtn.addEventListener("click", this.nextBtnListener);

    this.showSlides();
  }
}

const headerSliderElement = document.getElementById("header-slider"),
  bodySliderElement = document.getElementById("body-slider");

const sliderInit = () => {
  const headerSlider = new Slider(headerSliderElement);
  const bodySlider = new Slider(bodySliderElement);

  headerSlider.init();
  bodySlider.init();
};

export { sliderInit };
