import {} from './main.js';

export const createEventListeners = () => {
    document.getElementById('homeTabButton').addEventListener('click',() => selectTab("homeTab"));
    document.getElementById('hillTabButton').addEventListener('click',() => selectTab("hillTab"));
    document.getElementById('morseTabButton').addEventListener('click',() => selectTab("morseTab"));


    document.addEventListener("DOMContentLoaded", () => selectTab("homeTab"));
}