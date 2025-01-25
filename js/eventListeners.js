import { selectTab } from './main.js';

export const createEventListeners = () => {
    document.getElementById('homeTabNav').addEventListener('click',() => selectTab("homeTab"));
    document.getElementById('hillTabNav').addEventListener('click',() => selectTab("hillTab"));
    document.getElementById('morseTabNav').addEventListener('click',() => selectTab("morseTab"));


    document.addEventListener("DOMContentLoaded", () => selectTab("homeTab"));
}