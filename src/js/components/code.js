export function codeText() {
    const inputText = document.getElementById("input-text").value;
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
  
    updateOutput(codedText);
  }
  
  export function decodeText() {
    const inputText = document.getElementById("input-text").value;
    const rules = {
      'ai': 'a',
      'enter': 'e',
      'imes': 'i',
      'ober': 'o',
      'ufat': 'u',
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
    if (text) {
      outputTextElement.textContent = text;
      outputTextElement.style.display = "block";
      codeResultElement.style.display = "none";
    } else {
      outputTextElement.textContent = "Nenhuma Mensagem encontrada";
      outputTextElement.style.display = "block";
      codeResultElement.style.display = "block";
    }
  }
  