window.onload = function(){
    let images = [
        'images/fb.png',
        'images/IMAGE.jpg',
        'images/Logo.png'
    ];

    let currentImage = 0;
    let imageEl = document.querySelector('img');
    function changeImage(){
        imageEl.src = images[currentImage];
        currentImage++;
        if(currentImage>=images.length){
            currentImage = 0;
        }
    }
    // function Infinity(){

    // }
    // changeImage();
    // setInterval(changeImage, 3000);
    let pizza = {
        size:[
            {sizeName:'sm',
             price:50},
             {sizeName:'md',
             price:60}
        ],
        model:[
            'seafood',
            '4cheaders',
            'super meat'
        ]
    }

    let finishBlock = document.querySelector('.thank-you');
    let form = document.querySelector('form');
    let outputPrice = document.querySelector('.total-price');
    let orderBtn = document.querySelector('button');
    let pizzaModel = document.querySelector('#pizza-model');
    let [...sizeRadiobuttons]=document.querySelectorAll('input[type=radio]');
    // let checkedRadio=document.querySelector('input[type=radio]:checked').value;
    let totalPrice = 0;
    function calculateOrder(){
        orderBtn.setAttribute('disabled', 'disabled');
        let sizePrice = 0;
        let pizzaSizeSelect = false;
        for(let i=0; i<sizeRadiobuttons.length; i++){
            if(sizeRadiobuttons[i].checked){
                sizePrice = Number(sizeRadiobuttons[i].value);
                pizzaSizeSelect = true;
                break;
            }
        }
        outputPrice.innerHTML = `${totalPrice+Number(pizzaModel.value) + sizePrice}`;
        if(pizzaSizeSelect===true && Number(pizzaModel.value)>0){
            orderBtn.removeAttribute('disabled');
        }
    }
    calculateOrder();
    form.addEventListener('change',calculateOrder);
    orderBtn.onclick = function(e){
        e.preventDefault();
        form.style.display = 'none';
        finishBlock.style.display = 'block';
    };
};