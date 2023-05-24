window.onload   = function() {
    let btn = document.querySelector('button');
    function removeLastItem(list){
        alert('Remove last item');
    }
    btn.onclick = function() {
        // alert('Hello world! ');
        removeLastItem('list');
    };

};