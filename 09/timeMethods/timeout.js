window.onload = function() {
    function showMessage(){
        console.log("Message");
    }
    setTimeout(showMessage, 5000);

    setTimeout(()=>{
        console.log('Long message');
    }, 10000);
};