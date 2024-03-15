document.addEventListener('DOMContentLoaded', function () {
    const openLoginButton = document.getElementById('openLogin');
    const loginModal = document.getElementById('loginModal');
    const closeLoginButton = document.getElementById('closeLogin');
    const loginButton = document.getElementById('loginButton'); 


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

    // Validación de formulario
    let formulario = document.querySelector("form");
    let usuario = document.querySelector("#username");
    let contraseña = document.querySelector("#password");
    let erroresDiv = document.querySelector(".errores");

    loginButton.addEventListener("click", function (e) { 
        e.preventDefault();
        let errores = [];
        erroresDiv.innerHTML = ``;

        if (usuario.value === "") {
            errores.push("El usuario no es válido");
        }

        if (contraseña.value === "") {
            errores.push("La contraseña no es válida");
        }

        if (errores.length > 0) {
            errores.forEach(function (error) {
                let div = document.createElement("div");
                div.textContent = error;
                erroresDiv.appendChild(div);
            });
        } else {
            alert("Inicio de sesión exitoso");
            formulario.reset();
            window.location.href = "index.html";
        }
    });
});