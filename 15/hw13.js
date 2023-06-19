window.onload = function() {
    let btn = document.querySelector('button');
    let widthEl = document.querySelector('#width');
    let heightEl = document.querySelector('#height');
    let svgContainer = document.querySelector('#svgCanvas');
    function createRect(width, height){
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
        svg.setAttribute('border', '1px solid black');

        let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.floor(Math.random() * 100);
        const lightness = Math.floor(Math.random() * 100);
        rect.setAttribute('fill', `hsl(${hue}, ${saturation}%, ${lightness}%)`);
        svg.appendChild(rect);
        svgContainer.appendChild(svg);
    }
    btn.onclick = function () {
        // e.preventDefault();
        let widthValue = Number(widthEl.value);
        let heightValue = Number(heightEl.value);
        createRect(widthValue, heightValue);
    };

};