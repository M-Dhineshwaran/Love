const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// function to move NO button
function moveNoButton() {
  const containerWidth = questionContainer.offsetWidth;
  const containerHeight = questionContainer.offsetHeight;

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const newX = Math.random() * (containerWidth - btnWidth);
  const newY = Math.random() * (containerHeight - btnHeight);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// Desktop: mouse hover
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile: touch
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // prevents click
  moveNoButton();
});

// Optional: click fallback
noBtn.addEventListener("click", moveNoButton);

// YES button
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
