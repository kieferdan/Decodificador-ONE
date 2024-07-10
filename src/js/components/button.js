document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("Button");

  if (button) {
    button.addEventListener("click", () => {
      alert("Button clicked");
    });
  }
});
