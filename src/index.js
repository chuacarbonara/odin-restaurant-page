import {homeTab} from "./home.js";
import {menuTab} from "./menu.js";
import "./styles.css";

homeTab();

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");

homeBtn.addEventListener("click", homeTab);
menuBtn.addEventListener("click", menuTab);