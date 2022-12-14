const title = document.querySelector("h1");
console.log(title)

const window = document.querySelector(".window");
console.log(divWindow)

const txtbox = document.querySelectorAll(".txtbox")
console.log(txtbox)

title.addEventListener("click", () => {
    title.style.color = "blue"
})


window.forEach((txtbox, index) => {
    txtbox.addEventListener("click", () => {
        console.log("card n°" + (index + 1) + "cliquée !");
        txtbox.classList.toggle("active");
    });
})