document
  .getElementsByClassName("toggleMenu")[0]
  .addEventListener("click", () => {
    let menu = document.getElementById("nav");

    if (nav.className == "hide") {
      nav.className = "show";
    } else {
      nav.className = "hide";
    }
  });

let imgs = document.querySelectorAll(".product img");
for (let img of imgs) {
  img.onload = function () {
    let width = img.width;
    img.style.height = width + "px";
  };
}
