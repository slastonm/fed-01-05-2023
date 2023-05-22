window.onload = function() {
    let insideEl = document.querySelector('html');
    console.log(insideEl.parentNode);
    let menuEl = document.querySelector('.menu');
    let menuElements = menuEl.children;
    console.log(menuElements);
    // let firstItem = menuEl.firstChild;
    let firstItem = menuEl.firstElementChild;
    let lastItem = menuEl.lastElementChild;

    console.log(firstItem);
    console.log(lastItem);

    let activeItem = document.querySelector('.active');
    // activeItem.nextElementSibling.innerHTML = 'Next after active item';
    activeItem.previousElementSibling.innerHTML = 'Previous after previous';
    console.log(activeItem.nextElementSibling, 'nextSibling');
};