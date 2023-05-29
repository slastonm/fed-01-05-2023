window.onload = function() {
    let testBtn = document.querySelector('.test');
    function displayAlert(){
         alert ('test clicked');
    }
    testBtn.addEventListener('click',displayAlert);

    let removeAlert = document.querySelector('.remove');
    removeAlert.addEventListener('click',function(){
        testBtn.removeEventListener('click', displayAlert);
        alert('Event removed');
    });

    let title = document.querySelector('h1');
    title.addEventListener('click',function(){
        console.log(this);
        this.innerHTML = 'Hello'
    });
    let subTitle = document.querySelector('h2');
    subTitle.addEventListener('click',function(event){
        console.log(event);
    });
    let link = document.querySelector('a');
    link.addEventListener('click',function(e){
        alert('Event prevented');
        e.preventDefault();
    });
    document.addEventListener('keydown', function(event){
        console.log(event);
    });
    // testBtn.onclick = function(){};
    let input = document.querySelector('input');
    input.addEventListener('keydown',function(event){
        if(event.key =='a' && event.ctrlKey === true){
            alert("Copy processing");
        }
    });
};