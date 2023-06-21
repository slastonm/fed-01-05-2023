import { menu, toggleMenu } from "./headers.js";
window.onload = function(){
    let header = document.querySelector('header');
    header.onclick = function(){
        menu('Info form index.js');
    }
    let btn = document.querySelector('.btn');
    btn.onclick = function(){
        toggleMenu();
    }
}