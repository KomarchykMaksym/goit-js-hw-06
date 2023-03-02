const inputElem = document.getElementById("name-input");
const outputElem = document.getElementById("name-output");
inputElem.addEventListener("input", () => {
    const name = inputElem.value.trim() || "Anonymous";
    outputElem.textContent = name;
  });