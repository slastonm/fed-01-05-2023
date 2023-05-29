window.onload = function() {
    let outputEl = document.querySelector('h1');
    function myTimer(){
        const todayDate = new Date();
        outputEl.innerHTML  = todayDate.toLocaleTimeString();
    }
    let stop = document.querySelector('.stop');
    let myTimerInterval = setInterval(myTimer, 1000);

    let timeOutData = setTimeout(function() {
        console.log('Message1');
    }, 5000)


    function stopClock(){
        // alert('stop')
        // clearInterval(myTimerInterval);
        alert('stop message show ');
        clearTimeout(timeOutData);
    };
    stop.onclick= stopClock;
    let start = document.querySelector('.start');
    start.addEventListener('click', function(){
        myTimerInterval = setInterval(myTimer,1000);
    });

};