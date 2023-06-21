export function menu(info){
    alert(`hello ${info}`);
}

export function toggleMenu(){
    let menu = document.querySelector('.menu');
    menu.classList.toggle('.active');
}
