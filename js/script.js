{
    const welcome = () => {
    console.log("Hello stranger");
    init();
}

const button = document.querySelector(".js-button")
const main = document.querySelector(".js-main")

const init = () => {
button.addEventListener("click", () => {
    switch (button.innerText) {

    case "Nox":
    return button.innerText = "Lumos", main.classList.add("main--nox");
    case "Lumos":
    return button.innerText = "Nox", main.classList.remove("main--nox");
    }
});
}

welcome();
}