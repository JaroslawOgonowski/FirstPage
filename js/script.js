console.log("siemanko!");
let button = document.querySelector(".js-button");
let button__div = document.querySelector(".js-button__div");
let main__change = document.querySelector(".js-main--change");
let main = document.querySelector(".js-main");
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
      main.classList.add ("js-main--change");
      break;

    case "dzięki :)":
      button.innerText = "Chcesz jeszcze raz?- kliknij";
      break;
    case "Chcesz jeszcze raz?- kliknij":
      button.innerText = "wybierz liczbę";
      main.classList.remove ("js-main--change");
      break;
    case "wybierz liczbę":
      button.innerText = "pomnóż razy 2";
      break;

    default:
      console.log("Już nic więcej nie ma :)");
      break;
  }
});
