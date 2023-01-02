const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const menu = document.querySelector('#sidebar');

openMenu.addEventListener('click', () => {
  menu.showModal();
});
closeMenu.addEventListener('click', () => {
  menu.close();
});

document.body.addEventListener('click', (e) => {
  const menuArea = menu.getBoundingClientRect();
  if (e.clientX < menuArea.left) {
    menu.close();
  }
});
