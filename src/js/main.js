import { initializeButton } from "./components/button.js";
import { codeText, decodeText } from "./components/code.js";

document.addEventListener("DOMContentLoaded", () => {
  window.codeText = codeText; // Expondo para uso em button.js
  window.decodeText = decodeText; // Expondo para uso em button.js

  // Função para carregar o componente HTML de forma assíncrona
  function loadComponent(url, elementId, callback, type, buttonId) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const container = document.createElement("div");
        container.innerHTML = data;
        const button = container.querySelector("button");
        button.id = buttonId; // Atribui o ID específico ao botão
        document.getElementById(elementId).appendChild(container);
        if (callback) callback(type, button);
      })
      .catch((error) => {
        console.error("Erro ao carregar o componente:", error);
      });
  }

  // Carregar os componentes de botão
  loadComponent(
    "src/components/button.html",
    "app",
    initializeButton,
    "code-button",
    "code-button"
  );
  loadComponent(
    "src/components/button.html",
    "app",
    initializeButton,
    "decode-button",
    "decode-button"
  );
});
