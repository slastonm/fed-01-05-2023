window.onload = function() {
    let title = document.querySelector('h1');
    title.setAttribute('style', 'color:yellow; background-color:black;');
    // title.setAttribute('style','padding: 50px');
    // console.log(title);
    let basePadding = 10;
    title.style.cssText +='padding: 50px; margin-bottom:50px';
    let pEl = document.querySelector('p');
    pEl.style.color = 'red';
    pEl.style.backgroundColor = 'black';
    pEl.style.fontSize = '20px';
    pEl.style.paddingTop = `${basePadding}px`;

    let h2  = document.querySelector('h2');
    let allStyles = getComputedStyle(h2);
    console.log(allStyles.background);
    console.log(allStyles.margin);
    let menu = document.querySelector('#menu');
    console.log(menu.className);
    // menu.setAttribute('class', 'new');
    // menu.className +=' new';
    menu.classList.add('new', 'info', 'm-1', 'show');
    // menu.classList.add('warning');
    // menu.classList.contains('show'); true, false
    console.log(menu.classList.contains('show'));
    console.log(menu.className);
    // menu.classList.remove('show');
    // console.log(menu.classList.contains('show'));
    // menu.classList.replace('show','disabled');
    let menuButton = document.querySelector('button');
    menuButton.onclick = function() {
        menu.classList.toggle('show');
    };
    let box = document.querySelector('.box');
    let widht = box.offsetWidth;
    let height = box.offsetHeight;
    console.log(widht, height);

    let domSize = box.getBoundingClientRect();
    console.log(domSize);

    let boxStyle = getComputedStyle(box);
    console.log( boxStyle.marginLeft, boxStyle.marginRight);
    console.log( parseInt(boxStyle.marginLeft), parseInt(boxStyle.marginRight));
    console.log(this.innerWidth);
    console.log(this.innerHeight);
    function showWindow(position='center'){
        // 'left-top' = l=0 t=0
        // 'left-bottom' = l=0 t=0
        // 'right-top' = l=0 t=0
        // center 
    }
    showWindow();
};  