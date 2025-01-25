import { createEventListeners } from "./eventListeners.js";

createEventListeners();

export function selectTabSubtab(tab, subtab) {
    let tabs = document.getElementsByClassName("tab-content");
    let subtabs = document.getElementsByClassName("subtab-content");
    for (let i = 0; i < tabs.length; i++) {
        tab == tabs[i].id ? tabs[i].style.display = "flex" : tabs[i].style.display = "none";
    }
    for (let i = 0; i < subtabs.length; i++) {
        subtab == subtabs[i].id ? subtabs[i].style.display = "flex" : subtabs[i].style.display = "none";
    }
}