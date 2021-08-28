// root
const root = document.createElement(":root");
root.style.boxSizing = "border-box";
root.style.fontSize = "62.5%";

//main
const mainTag = document.querySelector("main");

//h2
const h2Tag = document.querySelector("h2");
h2Tag.classList.add("h2Style");

//Input Name Section ---------------------------------
const inputNameSection = document.createElement("section");
mainTag.append(inputNameSection);

//form
const inputNameForm = document.createElement("form");
inputNameSection.append(inputNameForm);
inputNameForm.classList.add("inputFormStyle");

//input
const inputName = document.createElement("input");
inputNameForm.append(inputName);
inputName.type = "text";
inputName.name = "name";
inputName.placeholder = "Your name...";
inputName.classList.add("inputNameStyle");

//Go button
const goBtn = document.createElement("input");
inputNameForm.appendChild(goBtn);
goBtn.type = "submit";
goBtn.value = "Go";
goBtn.classList.add("goBtnStyle");

let goBtnBgColor = "lightblue";
goBtn.style.backgroundColor = goBtnBgColor;
goBtn.addEventListener("mouseover", () => {
  goBtn.style.backgroundColor = "lightgreen";
});

goBtn.addEventListener("mouseout", () => {
  goBtn.style.backgroundColor = goBtnBgColor;
});

//Weekend countdown -----------------------------

let day;
let getUTCDay = new Date().getUTCDay();
switch (getUTCDay) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 0:
    day = "Sunday";
    break;
}

const getForm = document.querySelector("form");
const getInput = document.querySelector("input");

getForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (getUTCDay === 0 || getUTCDay === 6) {
    h2Tag.innerText = `Hello ${getInput.value}, today is ${day}. It is already weekend.`;
  } else {
    h2Tag.innerText = `Hello ${getInput.value}, today is ${day}. Only ${
      5 - getUTCDay
    } days left until weekend.`;
  }
});
