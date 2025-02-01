const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close');
const offcanvas = document.querySelector('.offcanvas');

openBtn.addEventListener('click', function(e) {
  offcanvas.classList.add('active');
  openBtn.style.display = 'none';
});
closeBtn.addEventListener('click', function(e) {
  offcanvas.classList.remove('active');
  openBtn.style.display = 'block';
});
