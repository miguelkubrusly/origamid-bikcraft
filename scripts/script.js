import Animate from "./plugins/Animate.js";

new Animate();

//active link

const headerLinks = document.querySelectorAll(".header-menu a");
const currentLink = location.pathname;

const activeLink = [...headerLinks].filter((link) => {
  return link.attributes.href.nodeValue === currentLink;
})[0];
if (activeLink) {
  activeLink.classList.add("ativo");
}

//img gallery

const bikeImgs = document.querySelector(".bicicleta-imagens");
const bikeImgList = document.querySelectorAll(".bicicleta-imagens img");

const changeToTop = (event) => {
  const img = event.currentTarget;
  const scrollY = window.scrollY;
  bikeImgs.prepend(img);
  window.scrollTo({ top: scrollY, behavior: "instant" });
};

bikeImgList.forEach((bike) => {
  bike.addEventListener("click", changeToTop);
});

//orçamento query

if (location.search) {
  const params = new URLSearchParams(location.search);
  const product = params.get("product");
  const productSpec = params.get(product);

  const inputs = document.querySelectorAll('#orcamento input[type="radio"]');

  let inputProduct;
  if (product === "bike") {
    inputProduct = [...inputs].filter((input) => {
      return input.value === "bikcraft";
    })[0];
  } else {
    inputProduct = [...inputs].filter((input) => {
      return input.value === "seguro";
    })[0];
  }
  const inputSpec = [...inputs].filter((input) => {
    return input.value === productSpec;
  })[0];

  inputProduct.checked = true;
  inputSpec.checked = true;
}

//perguntas frequentes

const questions = document.querySelectorAll(".seguros-perguntas dt");
const answers = document.querySelectorAll(".seguros-perguntas dd");

const showAnswer = (e) => {
  const currentQuestion = e.currentTarget;
  const answer = currentQuestion.nextElementSibling;
  const answerDisplay = getComputedStyle(answer).display;
  answer.style.display = answerDisplay === "none" ? "block" : "none";
};

questions.forEach((question) => {
  question.addEventListener("click", showAnswer);
});
