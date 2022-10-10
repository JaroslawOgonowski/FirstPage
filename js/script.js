{
  const welcome = () => {
    console.log("Hello!");
  };
const playGame = (button, body) => {
button.addEventListener("click", () => {
  switch (button.innerText) {
    case "Przejdź do następnego kroku":
      button.innerText = "pomnóż razy 2";
      break;
    case "pomnóż razy 2":
      button.innerText = "dodaj 12";
      break;
    case "dodaj 12":
      button.innerText = "odejmij 8";
      break;
    case "odejmij 8":
      button.innerText = "teraz wszystko razy 4";
      break;
    case "teraz wszystko razy 4":
      button.innerText = "odejmij 13";
      break;
    case "odejmij 13":
      button.innerText = "Jesteśmy już blisko";
      break;
    case "Jesteśmy już blisko":
      button.innerText = "razy 2";
      break;
    case "razy 2":
      button.innerText = "odejmij 3";
      break;
    case "odejmij 3":
      button.innerText = "policzone?";
      break;
    case "policzone?":
      button.innerText = "dzięki :)";
      body.classList.add("troll");
      break;
    case "dzięki :)":
      button.innerText = "Chcesz jeszcze raz?- kliknij";
      break;
    case "Chcesz jeszcze raz?- kliknij":
      button.innerText = "wybierz liczbę";
      body.classList.remove("troll");
      break;
    case "wybierz liczbę":
      button.innerText = "pomnóż razy 2";
      break;
  }
});
}
const init = () => {
const button = document.querySelector(".js-button");
const body = document.querySelector(".js-body");
welcome();
playGame(button, body);
}
init();
}