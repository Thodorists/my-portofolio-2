const laptop = window.matchMedia("(min-width: 1025px)")

if (laptop.matches){
    window.onload = function() {
        setTimeout(function(){
            const header = document.querySelector('.header')
            header.style.transition = '1s'
            header.style.transform = 'translateX(0%)'
        },1000)
    
    
        setTimeout(function() {
            const ulheader = document.querySelector('ul')
            ulheader.style.transition = '1s'
            ulheader.style.transform = 'translateX(0%)'
          }, 1500)
    }
}