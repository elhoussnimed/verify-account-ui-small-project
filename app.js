const verificcationCodeInputs = document.querySelectorAll(
  ".verification-code input"
);

verificcationCodeInputs[0].focus();

verificcationCodeInputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
      if (!input.nextElementSibling) {
        return;
      }
      input.nextElementSibling.focus();
    }

    if (
      e.code === "Backspace" &&
      input.previousElementSibling.value.length < 1
    ) {
      if (!input.previousElementSibling) {
        return;
      } else {
        input.previousElementSibling.focus();
      }
    }
  });

  input.addEventListener("input", () => {
    inputLengthFix(input);
    goToNextInput(input);
    goToPreviousInput(input);
    if (input.value.split("").length > 0) {
      input.style.cssText = `border: 2px solid #43a047`;
    } else {
      input.style.cssText = `border: 1px solid black`;
    }
  });
});

function inputLengthFix(input) {
  const inputText = input.value.split("").slice(0, 1);
  input.value = inputText;
}

function goToNextInput(input) {
  if (input.value.length >= 1) {
    if (!input.nextElementSibling) {
      return;
    }
    input.nextElementSibling.focus();
  }
}

function goToPreviousInput(input) {
  if (input.value.length < 1) {
    if (!input.previousElementSibling) {
      return;
    }
    input.previousElementSibling.focus();
  }
}
