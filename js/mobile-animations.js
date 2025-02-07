const mobile = window.matchMedia("(max-width: 1024px)");

if(mobile.matches){
    window.onload = function() {
        const title = document.querySelector('.title');
        title.style.transition = '2s'
        title.style.transform = 'scale(100%)';
    
        const home = document.querySelector('.homepage');
        home.style.transition = '2s'
        home.style.transform = 'scale(100%)';
    }
}