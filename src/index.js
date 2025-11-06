import {homeTab} from "./home.js";
import {menuTab} from "./menu.js";
import {contactTab} from "./contact.js";
import "./styles.css";

homeTab();

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");

homeBtn.addEventListener("click", homeTab);
menuBtn.addEventListener("click", menuTab);
contactBtn.addEventListener("click", contactTab);