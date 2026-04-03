const input = document.getElementById("nutritionInput");
const micToggle = document.getElementById("micToggle");
const voiceState = document.getElementById("voiceState");
const form = document.getElementById("queryForm");
const chips = document.querySelectorAll(".suggestion-chip");

let isListening = false;

const setListeningState = (listening) => {
  isListening = listening;
  micToggle.classList.toggle("listening", listening);
  micToggle.setAttribute("aria-pressed", String(listening));

  if (listening) {
    voiceState.textContent = "Listening...";
    voiceState.classList.add("listening-text");
  } else {
    voiceState.textContent = "Tap mic to start listening";
    voiceState.classList.remove("listening-text");
  }
};

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    input.value = chip.textContent.trim();
    input.focus();
  });
});

micToggle.addEventListener("click", () => {
  setListeningState(!isListening);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  voiceState.textContent = "Demo mode: UI only (no backend connected).";
  voiceState.classList.remove("listening-text");
  setListeningState(false);
});
