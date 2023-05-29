window.onload = function() {
    let firstElement = document.querySelector('#first');
    let secondElement = document.querySelector('#second');
    let thirdElement = document.querySelector('#third');
    let buble = false;


    firstElement.addEventListener('click', function(e){
        this.style.backgroundColor = 'green';
        alert('firs div');
    }, buble);
    secondElement.addEventListener('click', function(e){
        this.style.backgroundColor = 'orange';
        alert('Second div');
    }, buble);
    thirdElement.addEventListener('click', function(e){
        this.style.backgroundColor = 'pink';
        alert('Third div');
        e.stopPropagation();
    }, buble);


};