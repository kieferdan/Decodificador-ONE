import { initializeButton } from "./components/button.js";
import { codeText, decodeText } from "./components/code.js";

document.addEventListener("DOMContentLoaded", async () => {
  window.codeText = codeText;
  window.decodeText = decodeText;

  async function loadComponent(url, elementId, callback, type, buttonId) {
    try {
      const response = await fetch(url);
      const data = await response.text();

      const container = document.createElement("div");
      container.style.width = "100%";
      container.innerHTML = data;
      const button = container.querySelector("button");
      button.id = buttonId;

      document.getElementById(elementId).appendChild(container);
      if (callback) callback(type, button);
    } catch (error) {
      console.error("Erro ao carregar o componente:", error);
    }
  }

  const appElement = document.getElementById("app");

  const loadPromises = [
    loadComponent(
      "src/components/button.html",
      "app",
      initializeButton,
      "code-button",
      "code-button"
    ),
    loadComponent(
      "src/components/button.html",
      "app",
      initializeButton,
      "decode-button",
      "decode-button"
    ),
  ];

  await Promise.all(loadPromises);
});
