//! working on direction arrow
//? active class = activeBtn

const arrowDirection = document.querySelectorAll(".direction");

arrowDirection.forEach((btn) => {
  btn.addEventListener("click", () => {
    arrowDirection.forEach((arrowDirection) => {
      arrowDirection.classList.remove("activeBtn");
    });

    btn.classList.add("activeBtn");
  });
});

//!Working On Color Picker1 And Text Area1

const colorPicker1 = document.getElementById("color1");

const inputText1 = document.getElementById("input-text1");

colorPicker1.addEventListener("input", () => {
  inputText1.value = colorPicker1.value.toUpperCase();
});

inputText1.addEventListener("input", () => {
  colorPicker1.value = inputText1.value;
});

//!Working On Color Picker2 And Text Area2

const colorPicker2 = document.getElementById("color2");

const inputText2 = document.getElementById("input-text2");

colorPicker2.addEventListener("input", () => {
  inputText2.value = colorPicker2.value.toUpperCase();
});

inputText2.addEventListener("input", () => {
  colorPicker2.value = inputText2.value;
});

//! Working on 🚀 GENERATE Btn =  generate-btn
//?  background-image: linear-gradient(to top, #e33fce, #91ac56);

const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", () => {
  let direction = document.querySelector(".direction.activeBtn").dataset
    .direction;

  let gradient = `linear-gradient(${direction}, ${colorPicker1.value}, ${colorPicker2.value})`;

  document.body.style.background = gradient;
  document.querySelector(".code").innerText = `background-image:${gradient}`;
});

//! Working on 🎲 AUTO GRADIENT Btn
let randomNum = () => {
  let randamStr = "#";
  let str = "0123456789abcdef";
  for (let i = 0; i <= 5; i++) {
    randamStr += str[Math.floor(Math.random() * 16)];
  }
  return randamStr;
};

const autoGradientBtn = document.getElementById("auto-gradient-btn");

autoGradientBtn.addEventListener("click", () => {

  colorPicker1.value = randomNum();
  inputText1.value = colorPicker1.value.toUpperCase();

  colorPicker2.value = randomNum();
  inputText2.value = colorPicker2.value.toUpperCase();

    let direction = document.querySelector(".direction.activeBtn").dataset
    .direction;

  let gradient = `linear-gradient(${direction}, ${colorPicker1.value}, ${colorPicker2.value})`;

  document.body.style.background = gradient;
  document.querySelector(".code").innerText = `background-image:${gradient}`;

});


//! copy Btn

const copyBtn = document.getElementById("copy-btn");
const code = document.querySelector(".code");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(code.innerText);

  copyBtn.innerText = "Copied";

  setTimeout(() => {
    copyBtn.innerText = "Copy";
  }, 1500);
});