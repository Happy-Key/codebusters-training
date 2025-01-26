import { createEventListeners } from "./eventListeners.js";

createEventListeners();

export const Gametype = {
    HILL_ALPHANUM: 1,
}

const Gamemode = {
    INACTIVE: -1,
    NORMAL: 0,
    INVERSE: 1,
}

var playing = [-999, false];
export var gm = [-999, Gamemode.NORMAL];
var inputs = [-999, "hill-alphaNumInput"];
var displays = [-999, "hill-alphaNumDisplay"];
var gmOptions = [-999, "hill-alphaNumMode"];

var answer;

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

export function gameInput(gameType) {
    let input = document.getElementById(inputs[gameType]).value;
    if (!playing[gameType]) {
        if (input == "start") {
            playing[gameType] = true;
            document.getElementById(inputs[gameType]).value = '';
            document.getElementById(inputs[gameType]).placeholder = '';
            nextQuestion(gameType);
        }
    }
    else {
        if (input == answer) {
            nextQuestion(gameType);
            document.getElementById(inputs[gameType]).value = '';
        }
    }
}

function nextQuestion(gameType) {
    switch(gameType) {
        case Gametype.HILL_ALPHANUM:
            let rand = getRandomInt(0, 26);
            let letter = String.fromCharCode(rand + 97)
            answer = gm[gameType] == 0 ? letter : rand;
            document.getElementById(displays[Gametype.HILL_ALPHANUM]).textContent = gm[gameType] == 0 ? rand : letter;
    }
}

export function resetGame(gameType) {
    playing[gameType] = false;
    document.getElementById(inputs[gameType]).value = '';
    document.getElementById(inputs[gameType]).placeholder = 'start';
    document.getElementById(displays[Gametype.HILL_ALPHANUM]).textContent = "Type \"start\" to start";
}

export function switchGameMode(gameType) {
    let ele = document.getElementsByName('gender');
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            gm[gameType] = Gamemode[ele[i].value];
            return;
        }
    }
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}