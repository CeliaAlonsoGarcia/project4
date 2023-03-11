

const elements = [
  { buttonId: "button1", textId: "text1" },
  { buttonId: "button2", textId: "text2" },
  { buttonId: "button3", textId: "text3" },
  { buttonId: "button4", textId: "text4" },
];

elements.forEach(function(element) {
  const button = document.querySelector("#" + element.buttonId);
  const text = document.querySelector("#" + element.textId);
  let isTextVisible = false;

button.addEventListener("click", function() {
  if (isTextVisible) {
    text.style.display = "none";
    isTextVisible = false;
  } else {
    text.style.display = "block";
    isTextVisible = true;
  }
});
});