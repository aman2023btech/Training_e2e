'use strict';

const para= document.querySelector('p');

let req= new XMLHttpRequest();
req.open('GET', 'https://reqres.in/api/users/2');
req.send();


req.addEventListener('load', function(){

    console.log(JSON.parse(this.response));
    para.textContent= this.response;

})