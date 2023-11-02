"use strict";

const share = document.querySelector('.btn-share');
const form = document.querySelector('.fact-form');

share.addEventListener('click', function(){
    if(form.classList.contains('hidden')){
        form.classList.remove('hidden');
        share.textContent = 'Close';
    }else{
        form.classList.add('hidden');
        share.textContent = 'Share a fact';
    }
    
});
