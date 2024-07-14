export function codeText() {
  const inputText = document.getElementById("input-text").value;
  const rules = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  let codedText = inputText;
  for (let [key, value] of Object.entries(rules)) {
    const regex = new RegExp(key, "g");
    codedText = codedText.replace(regex, value);
  }

  updateOutput(codedText);
}

export function decodeText() {
  const inputText = document.getElementById("input-text").value;
  const rules = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  let decodedText = inputText;
  for (let [key, value] of Object.entries(rules)) {
    const regex = new RegExp(key, "g");
    decodedText = decodedText.replace(regex, value);
  }

  updateOutput(decodedText);
}

function updateOutput(text) {
  const outputTextElement = document.getElementById("output-text");
  const codeResultElement = document.querySelector(".code-result");
  const outputImageElement = document.querySelector(".output-image");
  const copyButtonElement = document.getElementById("copy-button");

  function setVisibility(element, isVisible) {
    element.style.display = isVisible ? "block" : "none";
  }

  if (text) {
    outputTextElement.textContent = text;
    setVisibility(outputTextElement, true);
    setVisibility(codeResultElement, false);
    setVisibility(outputImageElement, false);
    setVisibility(copyButtonElement, true);
  } else {
    outputTextElement.textContent = "Nenhuma Mensagem encontrada";
    setVisibility(outputTextElement, true);
    setVisibility(codeResultElement, true);
    setVisibility(outputImageElement, true);
    setVisibility(copyButtonElement, false);
  }
}

export function copyText() {
  const outputTextElement = document.getElementById("output-text");
  const textToCopy = outputTextElement.textContent;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Texto copiado!");
    })
    .catch((err) => {
      console.error("Erro ao copiar texto: ", err);
    });
}
