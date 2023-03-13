
// Projects page JS - Buttons make more text appear
// nextElementSibling targets element next to accordion => panel
// forEach works like a loop

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
    const panel2 = accordion.nextElementSibling;
    console.log(panel2);
    panel2.style.display = panel2.style.display === "block" ? "none" : "block";
    
  });
});
