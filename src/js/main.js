document.addEventListener("DOMContentLoaded", () => {
  // Função para carregar o componente HTML de forma assíncrona
  function loadComponent(url, elementId) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(elementId).innerHTML = data;
        // Após carregar o componente, chamar a função para inicializar o botão
        initializeButton();
      })
      .catch((error) => {
        console.error("Erro ao carregar o componente:", error);
      });
  }

  // Carregar o componente de botão
  loadComponent("src/components/button.html", "app");
});

// Função para inicializar o evento de clique do botão
function initializeButton() {
    const button = document.getElementById("myButton");
  
    button
      ? button.addEventListener("click", () => {
          console.log("Button clicked");
        })
      : console.error("Button not found");
  }
  
