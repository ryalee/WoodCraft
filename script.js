function showShopMenu() {
  const showMenu = document.querySelector('.shopMenu'); 
  const menuIcon = document.querySelector('.fa-bars');

  showMenu.classList.toggle('active');
  menuIcon.classList.toggle('fa-x');
}