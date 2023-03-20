const ratingSection = document.querySelector("#rating-section");
const thankYouSection = document.querySelector("#thank-you-section");
const ratingButtons = document.querySelectorAll("input[name='rating']");
const submitButton = document.querySelector("#submit-button");
const selectedRatingSpan = document.querySelector("#selected-rating")

let lastPressedRatingButton = null;

ratingButtons.forEach((ratingButton) => {
  ratingButton.addEventListener("click", (event) => {
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

    ratingSection.classList.add("hidden");
    ratingSection.classList.remove("flex");

    thankYouSection.classList.add("flex");
    thankYouSection.classList.remove("hidden");
  }
});
