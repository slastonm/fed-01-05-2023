window.onload = function() {
    let newEl = document.createElement('div');
    newEl.innerHTML ='Hello js';
    document.body.appendChild(newEl);

    let newP = document.createElement('p');
    newP.innerHTML = 'Lorem Ipsum';
    newP.id = 'js-id';  
    newP.className = 'js-class';
    document.body.appendChild(newP);


    let menuContainer = document.querySelector('.menu');
    let menuItemsData = ['PRODUCTS','AESTHETIC LINES', 'INSPIRATION', 'PRODUCTS2','AESTHETIC LINES2'];
    // let menuItemsData = [];


    // let liIem = document.createElement('li');
    // liIem.innerHTML = menuItemsData[0];
    // menuContainer.appendChild(liIem);

    function createMenuItem(itemContent){
        let li = document.createElement('li');
        li.className = 'js-class';
        li.innerHTML = itemContent;
        return li;
    }

    // menuContainer.appendChild(createMenuItem(menuItemsData[0]));
    // menuContainer.appendChild(createMenuItem(menuItemsData[1]));
    for(let i=0; i<menuItemsData.length; i++){
        menuContainer.appendChild(createMenuItem(menuItemsData[i]));
    }

    let firstItem = menuContainer.firstChild;
    menuContainer.removeChild(firstItem);

    function removeLastChild(container){
        let removeItem = container.firstElementChild;
        if(removeItem != null){
            container.removeChild(removeItem);
        }
    }

    removeLastChild(menuContainer);
    // removeLastChild(menuContainer);
    // removeLastChild(menuContainer);
    // removeLastChild(menuContainer);
    // removeLastChild(menuContainer);

    const setA = document.querySelector('#set');
    const removeHref = document.querySelector('#remove');
    const getHref = document.querySelector('#get');
    // set
    setA.setAttribute('href', 'https://prog.kiev.ua/');
    // read
    let hrefData = getHref.getAttribute('href');
    console.log(hrefData);
    // delete
    removeHref.removeAttribute('href');

    function styleFirstElement(container) {
        let firstChild = container.firstElementChild;
        if(firstChild != null) {
            // firstChild.setAttribute('style','color:"yellow"');
            firstChild.setAttribute("style","color:yellow; background-color:blue;");
        }
    }
    styleFirstElement(menuContainer);

};