document.addEventListener("DOMContentLoaded", () => {
  function codeText() {
    const inputText = document.getElementById("input-text").value;
  }

  const rules = {
    'a': "ai",
    'e': "enter",
    'i': "imes",
    'o': "ober",
    'u': "ufat",
  };

  let codedText = inputText;
  for (let [key, value] of Object.entries(rules)) {
    const regex = new RegExp(key, "g");
    codedText = codedText.replace(regex, value);
  }

  const outputTextElement = document.getElementById("output-text");
  outputTextElement.textContent = codedText;
  
  window.codeText = codeText
});