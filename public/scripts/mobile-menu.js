// public/scripts/mobile-menu.js
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const b1 = document.getElementById('bar1');
  const b2 = document.getElementById('bar2');
  const b3 = document.getElementById('bar3');
  const isOpen = menu.classList.contains('open');

  menu.classList.toggle('open');

  if (!isOpen) {
    b1.style.transform = 'translateY(8px) rotate(45deg)';
    b2.style.opacity = '0';
    b3.style.transform = 'translateY(-8px) rotate(-45deg)';
  } else {
    b1.style.transform = '';
    b2.style.opacity = '';
    b3.style.transform = '';
  }
}