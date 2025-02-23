window.onload = function() {
    const title = document.querySelector('.title')
    title.style.transition = '2s'
    title.style.transform = 'scale(1)'

    const about = document.querySelector('.about')
    about.style.transition = '2s'
    about.style.transform = 'scale(1)'

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
