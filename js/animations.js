var laptop = window.matchMedia("(min-width: 1025px)")

if (laptop.matches){
    window.onload = function() {
        const title = document.querySelector('.title');
        title.style.transition = '2s'
        title.style.transform = 'scale(100%)';
    
        const home = document.querySelector('.home');
        home.style.transition = '2s'
        home.style.transform = 'scale(100%)';
    
        const homebuttons2 = document.querySelector('.homebuttons2');
        homebuttons2.style.transform = 'scale(100%)'
    
        setTimeout(function(){
            const header = document.querySelector('.header');
            header.style.transition = '1s';
            header.style.transform = 'translateX(0%)';
        },1000)
    
    
        setTimeout(function() {
            const ulheader = document.querySelector('ul');
            ulheader.style.transition = '1s'
            ulheader.style.transform = 'translateX(0%)';
          }, 1500);
    }
}


