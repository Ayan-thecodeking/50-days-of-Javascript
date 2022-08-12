const form = document.querySelector(".features");
const radioInputs = document.querySelectorAll(".num");
const ratingCard = document.querySelector(".container");

let ratingValue;

radioInputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    ratingValue = e.target.value;
  });
});

features.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!ratingValue) return;
  renderThankyouContent(ratingCard, ratingValue);
});

function renderThankyouContent(container, ratingValue) {
  container.innerHTML = `
    <div class="thank-you">
        <img
          src="./assets/illustration-thank-you.svg"
          alt="thankyou"
          class="thank-you-img"
        />
        <p class="result">You selected ${ratingValue} out of 5</p>
        <h1 class="thank-you__title">Thank you!</h1>
        <p class="thank-you__description">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    `;
}

