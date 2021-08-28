// root
const root = document.createElement(":root");
root.style.boxSizing = "border-box";
root.style.fontSize = "62.5%";

//main
const mainTag = document.querySelector("main");

//h2
const h2Tag = document.querySelector("h2");

//Input Name Section ---------------------------------
const inputNameSection = document.createElement("section");
mainTag.append(inputNameSection);

//form
const inputNameForm = document.createElement("form");
inputNameSection.append(inputNameForm);

//input
const inputName = document.createElement("input");
inputNameForm.append(inputName);
inputName.type = "text";
// inputName.id = "name";
inputName.name = "name";

inputName.placeholder = "Your name...";
inputName.style.marginRight = "10px";

//submit button
const submitBtn = document.createElement("input");
inputNameForm.appendChild(submitBtn);
submitBtn.type = "submit";
submitBtn.value = "Go";

//Weekend countdown
let getUTCDay = new Date().getUTCDay();

const getForm = document.querySelector("form");
const getInput = document.querySelector("input");

getForm.addEventListener("submit", (event) => {
  event.preventDefault();
  switch (getUTCDay) {
    case 0:
      h2Tag.innerText = `Hello ${getInput.value}, today is Sunday. It is already weekend.`;
      break;
    case 1:
      h2Tag.innerText = `Hello ${getInput.value}, today is Monday. Only 4 days left until weekend.`;
      break;
    case 2:
      h2Tag.innerText = `Hello ${getInput.value}, today is Tuesday. Only 3 days left until weekend.`;
      break;
    case 3:
      h2Tag.innerText = `Hello ${getInput.value}, today is Wednesday. Only 2 days left until weekend.`;
      break;
    case 4:
      h2Tag.innerText = `Hello ${getInput.value}, today is Thursday. Only 2 days left until weekend.`;
      break;
    case 5:
      h2Tag.innerText = `Hello ${getInput.value}, today is Friday. Only 1 days left until weekend.`;
      break;
    case 6:
      h2Tag.innerText = `Hello ${getInput.value}, today is Saturday. It is already weekend.`;
      break;
  }
});
