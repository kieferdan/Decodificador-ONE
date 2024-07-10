// Função para inicializar o evento de clique do botão
function initializeButton() {
  const button = document.getElementById("myButton");

  button
    ? button.addEventListener("click", () => {
        console.log("Button clicked");
      })
    : console.error("Button not found");
}
