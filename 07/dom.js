window.onload = function() {
    // let title = document.querySelector('h1');
    let title = document.getElementById("selectMe");

    // console.log(title);
    let paragraph = document.getElementsByTagName('p');
    // let elemnt = Array.from(paragraph);
    let [...elemnt] = paragraph;
    console.log(paragraph);
    // console.log(elemnt);
    let [...pItems] = document.getElementsByClassName('pItem');
    console.log(pItems);
    // for (let i = 0 ; i < pItems.length; i++) {
    //     pItems[i].innerHTML ="Work js";
    // }
    elemnt.forEach(item =>{
        item.innerHTML = `<span>Hello</span>`;
    });

    // let firstA = document.querySelector("header a");
    let [...firstA] = document.querySelectorAll("header a");
    console.log(firstA);

    let combineSelect = document.querySelectorAll('p, a, h1');
    console.log(combineSelect);
    
    let liElements = document.querySelectorAll("ul li");
    console.log(liElements);

    let ulClassEl = document.querySelectorAll(".list li");
    console.log(ulClassEl);

    let nthLiEl = document.querySelector('.list li:nth-child(2)');
    console.log(nthLiEl);
};


