import "./style.scss";
import main_img from "./images/main_img_1366.jpg";
import im_event from "./images/event_1366.png";
import im_gift from "./images/gift_1366.png";
import im_sale from "./images/sale_1366.png";
import logo_academy_new from "./images/academy_1366.png";
import logo_cehab_new from "./images/cehab_1366.png";
import sky from "./images/sky_1366.png";
import yt from "./images/yt_1366.png";

const url = "https://postman-echo.com/post";
const input = document.querySelector("#form input");
const buttonSend = document.querySelector("#form button");

const form = document.querySelector("#form");
const divInfo = document.querySelector("#info");
const buttonBack = document.querySelector(".footer_button_back");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

form.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    if (input.value.length === 13 && Number.isNaN(+input.value) === false) {
      eventHandler();
    } else
      alert("Invalid phone format, correct format +38 (0__) ___ - __ - __");
  }
});

buttonSend.addEventListener("click", () => {
  if (input.value.length === 13 && Number.isNaN(+input.value) === false) {
    eventHandler();
  } else alert("Invalid phone format, correct format +38 (0__) ___ - __ - __");
});

async function eventHandler() {
  try {
    let responce = await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        phoneNumber: input.value,
      }),
    });
    input.value = "";
    form.style.display = "none";
    divInfo.style.display = "flex";
  } catch {
    console.error("Something went wrong");
  }
}

buttonBack.addEventListener("click", () => {
  divInfo.style.display = "none";
  form.style.display = "flex";
});
