window.onload = function() {
    let outputEl = document.querySelector('h1'); 
    let counter = 0;
    function counterInfo(){
        counter++;
        outputEl.innerHTML = counter;
    }
    setInterval(counterInfo, 1000);
};