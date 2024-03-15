function toggleMenu() {
    var links = document.querySelector('.links-and-icons');
    links.style.display = (links.style.display === 'block') ? 'none' : 'block';
  }

  function toggleMenu() {
    var linksAndIcons = document.getElementById("linksAndIcons");
    var mobileMenu = document.getElementById("mobileMenu");

    // Cambia la visibilidad del contenedor de enlaces e íconos
    linksAndIcons.style.display = (linksAndIcons.style.display === 'none' || linksAndIcons.style.display === '') ? 'flex' : 'none';

    // Muestra u oculta el contenedor de menú móvil
    mobileMenu.style.display = (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') ? 'flex' : 'none';
}