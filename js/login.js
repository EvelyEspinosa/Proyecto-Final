document.addEventListener('DOMContentLoaded', function () {
  const openLoginButton = document.getElementById('openLogin');
  const loginModal = document.getElementById('loginModal');
  const closeLoginButton = document.getElementById('closeLogin');

  openLoginButton.addEventListener('click', function () {
      loginModal.style.display = 'flex';
  });

  closeLoginButton.addEventListener('click', function () {
      loginModal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
      if (event.target === loginModal) {
          loginModal.style.display = 'none';
      }
  });
});