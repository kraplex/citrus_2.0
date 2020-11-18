import "./style.scss";
import bg from "./images/1bg.png";
import bg320 from "./images/bg-320.png";
import bottom_bg from "./images/bottom_bg.png";
import im_event from "./images/im_event.png";
import im_gift from "./images/im_gift.png";
import im_sale from "./images/im_sale.png";
import logo_academy_new from "./images/logo_academy_new.png";
import logo_cehab_new from "./images/logo_cehab_new.png";
import main_img from "./images/main_img.jpg";
import sky from "./images/sky.png";
import yt from "./images/yt.png";

const url = "https://postman-echo.com/post";
const input = document.querySelector(".form input");
const buttonSend = document.querySelector(".form button");

const form = document.querySelector(".form");
const divForm = document.querySelector(".form");
const divThanks = document.querySelector(".thanks");
const buttonBack = document.querySelector(".back");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

form.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    if (input.value.length === 2 && Number.isNaN(+input.value) === false) {
      eventHandler();
    } else alert("invalid phone format");
  }
});

buttonSend.addEventListener("click", () => {
  if (input.value.length === 2 && Number.isNaN(+input.value) === false) {
    eventHandler();
  } else alert("invalid phone format");
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
    divForm.style.display = "none";
    divThanks.style.display = "block";
  } catch {
    console.error("Something went wrong");
  }
}

buttonBack.addEventListener("click", () => {
  divThanks.style.display = "none";
  divForm.style.display = "flex";
  divForm.scrollIntoView({ block: "center", behavior: "smooth" });
});
