window.onload = function() {
    let btn = document.querySelector('button');
    let userName = document.querySelector('#user-name');
    let userAge = document.querySelector('#user-age');
    let name = /^[^\d!@#%*()?]{2,16}$/;
    let age = /^\d{1,3}$/;
    let userInfo = {
        name:"",
        age:null
    }
    localStorage.setItem('users', JSON.stringify([]));
    // function(el){
    //     if(name.test(el.value)){
    //         el.classList.add('valid');
    //     }
    //     else{
    //         el.classList.remove('valid');
    //         el.classList.add('invalid');
    //     }
    // }
    function checkValue(el, regExp){
        if(regExp.test(el.value)){
            el.classList.remove('bg-danger');
            el.classList.add('bg-success');
        }
        else{
            el.classList.remove('bg-success');
            el.classList.add('bg-danger');
        }
    }
    function checkStorage(value){
        if(localStorage.getItem('users').length == 0){
            localStorage.setItem('users', JSON.stringify([value]));
        }
        else{
            let users = JSON.parse(localStorage.getItem('users'));
            users.push(value);
            localStorage.setItem('users', JSON.stringify(users));
        }
    }

    userName.addEventListener('input', function(){
        checkValue(this, name);
    });
    userAge.addEventListener('input', function(){
        checkValue(this, age);
    });

    btn.addEventListener('click', function(e){
        e.preventDefault();
        if(name.test(userName.value)&& age.test(userAge.value)){
            userInfo.name = userName.value;
            userInfo.age = Number(userAge.value);
            checkStorage(userInfo);
        }
    });

};