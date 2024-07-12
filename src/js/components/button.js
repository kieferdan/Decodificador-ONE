export function initializeButton(type, button) {
  if (button) {
    button.classList.add(type);

    if (type === "code-button") {
      button.textContent = "Criptografar";
      button.addEventListener("click", () => {
        console.log("Button Code clicked");
      });
    } else if (type === "decode-button") {
      button.textContent = "Descriptografar";
      button.addEventListener("click", () => {
        console.log("Button Decode clicked");
      });
    }
  } else {
    console.error("Button not found");
  }
}
