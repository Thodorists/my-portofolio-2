var laptop = window.matchMedia("(min-width: 1025px)")

if (laptop.matches){
    window.onload = function() {
        const title = document.querySelector('.title');
        title.style.transition = '2s'
        title.style.transform = 'scale(100%)';
    
        const home = document.querySelector('.home');
        home.style.transition = '2s'
        home.style.transform = 'scale(100%)';

        const seeproject2 = document.querySelector('.seeproject2');
        seeproject2.style.display = 'none'
        seeproject2.addEventListener('mouseover',function(){
            seeproject2.style.transform = 'scale(0.97)'
        })
        seeproject2.addEventListener('mouseout',function(){
            seeproject2.style.transform = 'scale(1)'
        })

        const contactMe2 = document.querySelector('.contactMe2');
        contactMe2.style.display = 'none'
        contactMe2.addEventListener('mouseover',function(){
            contactMe2.style.transform = 'scale(0.97)'
        })
        contactMe2.addEventListener('mouseout',function(){
            contactMe2.style.transform = 'scale(1)'
        })

        setTimeout(function(){
            const seeproject2 = document.querySelector('.seeproject2');
            seeproject2.style.display = 'flex'
            const contactMe2 = document.querySelector('.contactMe2');
            contactMe2.style.display = 'flex'
        },1500)

        setTimeout(function(){
            const seeproject2 = document.querySelector('.seeproject2');
            seeproject2.style.display = 'flex'
            const contactMe2 = document.querySelector('.contactMe2');
            seeproject2.style.display = 'flex'
            seeproject2.style.transform = 'scale(100%)'
            contactMe2.style.transform = 'scale(100%)'
        },1750)

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


