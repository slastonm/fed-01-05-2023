window.onload = function() {
    let uniuqueEl = document.querySelector('#myEl');
    let currenBg = getComputedStyle(uniuqueEl).getPropertyValue('--custom-bgcolor');
    console.log(currenBg);
    if(currenBg == 'black') {
        uniuqueEl.style.setProperty('--custom-bgcolor','yellow');
    }
    let root = document.documentElement;
    console.log(getComputedStyle(root));
    let fontSize = getComputedStyle(root).getPropertyValue('--font-size');
    let currentMyColor = getComputedStyle(root).getPropertyValue('--my-color');
    function changePropery(){
        if(currentMyColor =='red'){
            root.style.setProperty('--my-color', 'orange');
            root.style.setProperty('--font-size', '20px');
            root.style.setProperty('--before-color', 'green');
        }
        // else if(currentMyColor =='orange'){

        //     root.style.setProperty('--my-color', 'red');
        //     root.style.setProperty('--font-size', '10px');
        // }
        else{
            console.log(11);
        }
        console.log(currentMyColor);
        
    }
    let btn = document.querySelector('button');
    btn.onclick= changePropery;
};

