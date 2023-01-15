document.getElementsByClassName("toggleMenu")[0].addEventListener("click", () => {
   let menu = document.getElementById('nav');

   if (nav.className == "hide") {
      nav.className = "show";
   } else {
      nav.className = "hide";
   }
});