import { gameInput, selectTabSubtab, resetGame, Gametype, switchGameMode } from './main.js';

export const createEventListeners = () => {
    document.getElementById('homeTabNav').addEventListener('click', () => selectTabSubtab("homeTab", "home-mainTab"));
    document.getElementById('hillTabNav').addEventListener('click', () => selectTabSubtab("hillTab", "hill-mainTab"));
    document.getElementById('morseTabNav').addEventListener('click', () => selectTabSubtab("morseTab", "morse-mainTab"));

    document.getElementById('home-mainNav').addEventListener('click', () => selectTabSubtab("homeTab", "home-mainTab"));
    document.getElementById('home-aboutNav').addEventListener('click', () => selectTabSubtab("homeTab", "home-aboutTab"));

    document.getElementById('hill-mainNav').addEventListener('click', () => selectTabSubtab("hillTab", "hill-mainTab"));
    document.getElementById('hill-alphaNumNav').addEventListener('click', () => {
        selectTabSubtab("hillTab", "hill-alphaNumSubtab"); 
        resetGame(Gametype.HILL_ALPHANUM);
    });
    document.getElementById('hill-matrixNav').addEventListener('click', () => selectTabSubtab("hillTab", "hill-matrixSubtab"));

    document.getElementById('morse-mainNav').addEventListener('click', () => selectTabSubtab("morseTab", "morse-mainTab"));
    document.getElementById('morse-alphaMorseNav').addEventListener('click', () => selectTabSubtab("morseTab", "morse-alphaMorseSubtab"));

    document.getElementById('hill-alphaNumInput').addEventListener('input', () => gameInput(Gametype.HILL_ALPHANUM));
    document.getElementById('hill-alphaNumOptions').addEventListener('click', () => {
        switchGameMode(Gametype.HILL_ALPHANUM);
        resetGame(Gametype.HILL_ALPHANUM);
    });

    document.addEventListener("DOMContentLoaded", () => selectTabSubtab("homeTab", "home-mainTab"));
}