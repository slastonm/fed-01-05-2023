window.onload = function() {  
    let container = document.querySelector('.container');
    let fragment = new DocumentFragment();
    function randomHSL(){
        let hue = Math.floor(Math.random()*360);
        let saturation = Math.floor(Math.random()*100);
        let lightness = Math.floor(Math.random()*100);
        return `hsl(${hue},${saturation}%,${lightness}%)`;
    }

    function createCircles(amount, size){
        for (let i = 0; i < amount; i++) {
            let div = document.createElement('div');
            div.style.width = `${size}px`;
            div.style.height = `${size}px`;
            div.style.borderRadius = '100%';
            div.style.background = randomHSL();
            div.addEventListener('click', function(){
                this.style.background = 'black';
                // this.remove();
            });
            fragment.appendChild(div);
        }
        return fragment;
    }
    container.appendChild(createCircles(100, 20));

    let galery = [
        '../img/image.png',
        'img/image.png'
    ]
};