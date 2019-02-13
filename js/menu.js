const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu refence. 
    // classList already refers to a list of classes, so no need to use dot prefix
    menu.classList.toggle('menu--open');
  }
  
  // Start Here: Create a reference to the ".menu" class
  const menu = document.querySelector('.menu');
  
  // create a reference to the ".menu-button" class
  const menuButton = document.querySelector('.fa-bars');
  
  // Using your menuButton reference, add a click handler that calls toggleMenu
  menuButton.addEventListener('click', toggleMenu);