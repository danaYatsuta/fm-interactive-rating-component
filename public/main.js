const ratingSection = document.querySelector("#rating-section");
const thankYouSection = document.querySelector("#thank-you-section");
const ratingButtons = document.querySelectorAll("input[name='rating']");
const submitButton = document.querySelector("#submit-button");
const selectedRatingSpan = document.querySelector("#selected-rating");

let lastPressedRatingButton = null;
let pressingRatingButtonFirstTime = true;

ratingButtons.forEach((ratingButton) => {
  ratingButton.addEventListener("click", (event) => {
    if (pressingRatingButtonFirstTime) {
      pressingRatingButtonFirstTime = false;

      submitButton.classList.add("hover:text-orange", "hover:bg-white");
    }

    if (
      lastPressedRatingButton !== null &&
      lastPressedRatingButton !== ratingButton
    ) {
      const lastPressedListItem = lastPressedRatingButton.parentElement;

      lastPressedListItem.classList.add("bg-lighter-dark-blue");
      lastPressedListItem.classList.remove("bg-medium-grey");
      lastPressedListItem.classList.remove("text-white");
    }

    lastPressedRatingButton = ratingButton;

    const listItem = ratingButton.parentElement;

    listItem.classList.add("bg-medium-grey");
    listItem.classList.remove("bg-lighter-dark-blue");
    listItem.classList.add("text-white");
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
      ratingSection.classList.add("hidden");
      ratingSection.classList.remove("flex");

      thankYouSection.classList.add("flex");
      thankYouSection.classList.remove("hidden");

      // this is not ideal but I havent managed to find another way to animate from "display: none"
      // explanation: https://stackoverflow.com/a/64001548
      document.body.offsetHeight;
      thankYouSection.classList.remove("opacity-0");
    }, 1000);
  }
});
