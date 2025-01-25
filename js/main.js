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

export function selectOneOfClass(name, className) {
    let collection = document.getElementsByClassName(className);
    for (let i = 0; i < collection.length; i++) {
        name == collection[i].id ? collection[i].style.display = "flex" : collection[i].style.display = "none";
    }
}

export function selectTabSubtab(tab, subtab) {
    let tabs = document.getElementsByClassName("tab-content");
    let subtabs = document.getElementsByClassName("subtab-content");
    for (let i = 0; i < tabs.length; i++) {
        name == tabs[i].id ? tabs[i].style.display = "flex" : tabs[i].style.display = "none";
    }
    for (let i = 0; i < subtabs.length; i++) {
        name == subtabs[i].id ? subtabs[i].style.display = "flex" : subtabs[i].style.display = "none";
    }
}