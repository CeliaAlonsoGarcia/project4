// Get buttons to open and close the cards

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

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("nav").style.top = "0";
//   } else {
//     document.getElementById("nav").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// This function uses the window.pageYOffset property to get the current scroll position, and compares it to the previous scroll position to determine whether the user is scrolling up or down. If the user is scrolling up, the function sets the top CSS property of the header element to 0, which shows the navigation bar. If the user is scrolling down, the function sets the top property to -50px, which hides the navigation bar.
function hideNavbarOnScroll() {
  let prevScrollPos = window.pageYOffset;
  window.addEventListener("scroll", function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.querySelector("nav").style.top = "0";
    } else {
      document.querySelector("nav").style.top = "-50px";
    }
    prevScrollPos = currentScrollPos;
  });
}

  // //getting the navbar element
  // const navbar = document.querySelector('.nav');
  // var lastScrollPos = 0;
  // //listening the scroll event 
  // window.addEventListener('scroll', (e) =>{
  //     //where are we on the page
  //     var scrollTop = window.pageYOffset;
  //     //scroll down
  //     if(scrollTop > lastScrollPos){
  //         navbar.style.transition = "all .4s ease";
  //         navbar.style.transform = "translateY(-100%)";
  //     }else{

  //         navbar.style.transition = "all .6s ease";
  //         navbar.style.transform = "translateY(0)";
  //     }

  //     lastScrollPos = scrollTop;
  // })

  window.onload = function() {
    hideNavbarOnScroll();
  }

