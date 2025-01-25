import { selectTab, selectOneOfClass, selectTabSubtab } from './main.js';

export const createEventListeners = () => {
    /*
    document.getElementById('homeTabNav').addEventListener('click',() => selectTab("homeTab"));
    document.getElementById('hillTabNav').addEventListener('click',() => selectTab("hillTab"));
    document.getElementById('morseTabNav').addEventListener('click',() => selectTab("morseTab"));

    document.getElementById('homeTabNav').addEventListener('click',() => selectTab("homeTab"));
    document.getElementById('hillTabNav').addEventListener('click',() => selectTab("hillTab"));
    document.getElementById('morseTabNav').addEventListener('click',() => selectTab("morseTab"));
    */

    document.getElementById('homeTabNav').addEventListener('click', () => selectTabSubtab("homeTab", "home-mainTab"));
    document.getElementById('hillTabNav').addEventListener('click', () => selectTabSubtab("hillTab", "hill-mainTab"));
    document.getElementById('morseTabNav').addEventListener('click', () => selectTabSubtab("morseTab", "morse-mainTab"));

    document.getElementById('home-mainNav').addEventListener('click', () => selectTabSubtab("homeTab", "home-mainTab"));
    document.getElementById('home-aboutNav').addEventListener('click', () => selectTabSubtab("homeTab", "home-aboutTab"));

    document.getElementById('hill-mainNav').addEventListener('click', () => selectTabSubtab("hillTab", "hill-mainTab"));
    document.getElementById('hill-alphaNumNav').addEventListener('click', () => selectTabSubtab("hillTab", "hill-alphaNumSubtab"));
    document.getElementById('hill-matrixNav').addEventListener('click', () => selectTabSubtab("hillTab", "hill-matrixSubtab"));

    document.getElementById('morse-mainNav').addEventListener('click', () => selectTabSubtab("morseTab", "morse-mainTab"));
    document.getElementById('morse-alphaMorseNav').addEventListener('click', () => selectTabSubtab("morseTab", "morse-alphaMorseSubtab"));


    document.addEventListener("DOMContentLoaded", () => selectTabSubtab("homeTab", "home-mainTab"));
}