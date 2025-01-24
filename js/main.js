import { createEventListeners } from "./eventListeners.js";

createEventListeners();



export function selectTab(name) {
    hideTabs();
    showTab(name);
}
  
function hideTabs() {
    let tabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
}

function showTab(name) {
    let tabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabs.length; i++) {
        if (name == tabs[i].id) { tabs[i].style.display = "flex";}
    }
}