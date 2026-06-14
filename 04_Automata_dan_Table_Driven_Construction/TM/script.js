const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const upperCount = document.getElementById("upperCount");
const lowerCount = document.getElementById("lowerCount");

const uppercaseBtn = document.getElementById("uppercaseBtn");
const lowercaseBtn = document.getElementById("lowercaseBtn");

const lightBtn = document.getElementById("light");
const darkBtn = document.getElementById("dark");
const sepiaBtn = document.getElementById("sepia");

function updateCount() {
  const text = textInput.value;

  let totalChar = text.length;
  let totalUpper = 0;
  let totalLower = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char >= "A" && char <= "Z") {
      totalUpper++;
    } else if (char >= "a" && char <= "z") {
      totalLower++;
    }
  }

  charCount.textContent = totalChar;
  upperCount.textContent = totalUpper;
  lowerCount.textContent = totalLower;
}

uppercaseBtn.addEventListener("click", function () {
  textInput.value = textInput.value.toUpperCase();
  updateCount();
});

lowercaseBtn.addEventListener("click", function () {
  textInput.value = textInput.value.toLowerCase();
  updateCount();
});

textInput.addEventListener("input", updateCount);

lightBtn.addEventListener("click", function () {
  document.body.classList.remove("dark-mode", "sepia-mode");
  document.body.classList.add("light-mode");
});

darkBtn.addEventListener("click", function () {
  document.body.classList.remove("light-mode", "sepia-mode");
  document.body.classList.add("dark-mode");
});

sepiaBtn.addEventListener("click", function () {
  document.body.classList.remove("light-mode", "dark-mode");
  document.body.classList.add("sepia-mode");
});

updateCount();