window.onload = function() {
    let menu = document.querySelector('.menu');
    let menuItems = ['Home', 'About', 'Posts', 'Sales'];
    let fragment = new DocumentFragment();
    menuItems.forEach(function(item) {
        let li = document.createElement('li');
        li.innerHTML = item;
        fragment.appendChild(li);
    });
    menu.appendChild(fragment);
    let title = document.querySelector('h1');
    let pEl = document.createElement('p');
    pEl.innerHTML = 'P after H1';
    title.after(pEl);
};