window.onload = function() {
    let hoverBlock = document.querySelector('.hover');
    let mouseBlock = document.querySelector('.mouse');
    hoverBlock.addEventListener('mouseover', function(e) {
        // alert('Hover');
        this.style.background ='red';
        mouseBlock.style.background = 'orange';
    });
    hoverBlock.addEventListener('mouseout', function(e) {
        // alert('UnHover');
        this.style.background ='yellow';
        mouseBlock.style.background = 'green';
    });
    let onmousedownEl = document.querySelector('.onmousedown');
    let onmousemoveEl = document.querySelector('.onmousemove');
    let onmouseupEl = document.querySelector('.onmouseup');

    onmousedownEl.onmousedown = function(e){
        this.innerHTML = `Cordinates ${e.clientX} ${e.clientY} and ${e.offsetX} ${e.offsetY}`;
    }
    onmousemoveEl.onmousemove = function(e){
        this.innerHTML = `Cordinates ${e.clientX} ${e.clientY} <br> and ${e.offsetX} ${e.offsetY}`;
    }
    onmouseupEl.onmouseup = function(e){
        this.innerHTML = `Cordinates ${e.clientX} ${e.clientY} <br> and ${e.offsetX} ${e.offsetY}`;
    }
};