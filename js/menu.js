document.addEventListener('DOMContentLoaded', function () {
  const burgerMenuIcon = document.querySelector('.burger-menu');
  const menuModal = document.getElementById('menuModal');
  const closeMenuButton = document.getElementById('closeMenu');

  burgerMenuIcon.addEventListener('click', function () {
      menuModal.style.display = 'block';
  });

  closeMenuButton.addEventListener('click', function () {
      menuModal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
      if (event.target === menuModal) {
          menuModal.style.display = 'none';
      }
  });
});

