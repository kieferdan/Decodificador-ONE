export function initializeButton(type, button) {
  if (button) {
    button.classList.add(type);

    if (type === "code-button") {
      button.textContent = "Criptografar";
      button.addEventListener("click", () => {
        window.codeText();
      });
    } else if (type === "decode-button") {
      button.textContent = "Descriptografar";
      button.addEventListener("click", () => {
        window.decodeText();
      });
    }
  } else {
    console.error("Button not found");
  }
}
