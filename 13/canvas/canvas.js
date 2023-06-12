window.onload = function() {
    let canvas = document.querySelector('canvas');
    let context = canvas.getContext('2d');

    context.font = "40px Arial";
    context.strokeText("Hello world!", 10, 50);
    canvas.onmouseenter = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.strokeText("Hello world!", 100, 250);
        context.moveTo(10, 150);
        context.lineTo(10, 1250);
        context.stroke();
    };
};
