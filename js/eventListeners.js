import { selectTab, selectOneOfClass } from './main.js';

export const createEventListeners = () => {
    /*
    document.getElementById('homeTabNav').addEventListener('click',() => selectTab("homeTab"));
    document.getElementById('hillTabNav').addEventListener('click',() => selectTab("hillTab"));
    document.getElementById('morseTabNav').addEventListener('click',() => selectTab("morseTab"));

    document.getElementById('homeTabNav').addEventListener('click',() => selectTab("homeTab"));
    document.getElementById('hillTabNav').addEventListener('click',() => selectTab("hillTab"));
    document.getElementById('morseTabNav').addEventListener('click',() => selectTab("morseTab"));
    */

    document.getElementById('homeTabNav').addEventListener('click',() => selectOneOfClass("homeTab", "tab-content"));
    document.getElementById('hillTabNav').addEventListener('click',() => selectOneOfClass("hillTab", "tab-content"));
    document.getElementById('morseTabNav').addEventListener('click',() => selectOneOfClass("morseTab", "tab-content"));

    document.getElementById('alphaNumNav').addEventListener('click',() => selectOneOfClass("hill-alphaNumSubtab", "subtab-content"));
    document.getElementById('matrixNav').addEventListener('click',() => selectOneOfClass("hill-matrixSubtab", "subtab-content"));
    document.getElementById('alphaMorseNav').addEventListener('click',() => selectOneOfClass("morse-alphaMorseSubtab", "subtab-content"));


    document.addEventListener("DOMContentLoaded", () => selectOneOfClass("homeTab", "tab-content"));
}