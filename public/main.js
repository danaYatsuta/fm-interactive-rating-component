const card = document.querySelector("#card");
const ratingSection = document.querySelector("#rating-section");
const thankYouSection = document.querySelector("#thank-you-section");
const ratingButtons = document.querySelectorAll("input[name='rating']");
const submitButton = document.querySelector("#submit-button");
const selectedRatingSpan = document.querySelector("#selected-rating");

let pressingRatingButtonFirstTime = true;

ratingButtons.forEach((ratingButton) => {
  ratingButton.addEventListener("click", (event) => {
    if (pressingRatingButtonFirstTime) {
      pressingRatingButtonFirstTime = false;
      submitButton.classList.remove("pointer-events-none");
    }
  });
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const checkedRatingButton = document.querySelector(
    "input[name='rating']:checked"
  );

  if (checkedRatingButton !== null) {
    selectedRatingSpan.textContent = checkedRatingButton.value;

    ratingSection.classList.add("opacity-0");

    setTimeout(() => {
      card.classList.remove("rating-state");
      card.classList.add("thank-you-state");

      // this is not ideal but I havent managed to find another way to animate from "display: none"
      // explanation: https://stackoverflow.com/a/64001548
      document.body.offsetHeight;
      thankYouSection.classList.remove("opacity-0");
    }, 1000);
  }
});
