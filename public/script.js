"use-strict";

(() => {
  const button = document.getElementById("js-button");
  const offscreen = document.getElementById("js-offscreen");
  const buttonOffscreen = document.getElementById("js-button-offscreen");
  console.log("button", button);

  button.addEventListener("click", e => {
    e.stopPropagation();
    console.log("show offscreen");

    offscreen.classList.add("active");
  });

  document.getElementById("js-offscreen").addEventListener("click", e => {
    e.stopPropagation();
  });

  buttonOffscreen.addEventListener("click", () => {
    offscreen.classList.remove("active");
  });
})();
