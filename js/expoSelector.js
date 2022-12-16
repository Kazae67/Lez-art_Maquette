
const containerExpos = document.querySelector(".containerExpos");
const preview = document.querySelector(".prev");
const active = document.querySelectorAll(".thumb");
 
containerExpos.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    preview.src = e.target.src;
    preview.classList.add("effect");
 
    setTimeout(function () {
      preview.classList.remove("effect");
    }, 100);
 
    active.forEach(function (thumb) {
      if (thumb.classList.contains("active")) {
        thumb.classList.remove("active");
      }
    });
 
    e.target.classList.add("active");
  }
});