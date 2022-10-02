
let display = document.querySelector(".screen");
let buttons = document.querySelectorAll("button");
let clearButton = document.querySelector(".clear");

let firtValue = 0;
let operatorSign = "";
let waitForSecondValue = false;
let isDecimalNumber = false;

function resetAll() {
  firtValue = 0;
  operatorSign = "";
  waitForSecondValue = false;
  isDecimalNumber = false;
  display.textContent = firtValue;
}
clearButton.addEventListener("click", resetAll);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("digit")) {
      let content = button.value;

      if (waitForSecondValue) {
        display.textContent = "";
        waitForSecondValue = false;
      }
     
      if (display.textContent == "0") {
        display.textContent = content;
      } else {
        display.textContent += content;
      }
    
    } else if (button.classList.contains("operator")) {
      
      firtValue = Number(display.textContent);
      operatorSign = button.value;
      waitForSecondValue = true;
      isDecimalNumber = false; 
    } else if (button.classList.contains("egal")) {
      let curentValue = Number(display.textContent);
      console.log(firtValue, operatorSign, curentValue);
      let res = 0;
      switch (operatorSign) {
        case "+":
          res = firtValue + curentValue;
          break;
        case "-":
          res = firtValue - curentValue;
          break;
        case "/":
          res = firtValue / curentValue;
          break;
        case "*":
          res = firtValue * curentValue;
          break;

        default:
          res = curentValue;
          break;
      }
      operatorSign = "";
      display.textContent = res;
    }
  });
});
