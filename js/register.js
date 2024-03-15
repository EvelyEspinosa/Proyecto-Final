function validar(){
    let nombre, apellido, correo, contraseña, expresion;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("correo").value;
    contraseña = document.getElementById("contraseña").value;
    expresion = /\w+@\w+\.+[a-z]/;
    

    if(nombre === "" || apellido === "" || correo === "" || contraseña === "" ){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(nombre.length<2){
        alert("El nombre es muy corto");
        return false;
    }
    else if(apellido.length>30){
        alert("El apellido es muy largo");
        return false;
    }
    
    else if(correo.length>100){
        alert("Correo no válido");
        return false;
    }
    else if(!expresion.text(correo)){
        alert("El correo electronico no válido");
        return false;
    }
    else if(contraseña.length>20){
        alert("La contraseña debe tener 20 caracteres como máximo");
        return false;
    }
}
