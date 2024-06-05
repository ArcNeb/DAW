document.getElementById("InputCorreo").addEventListener("blur", function(event) {
    var email = document.getElementById("InputCorreo").value;
    if (!email) {
        document.getElementById("InputCorreo").value = "Por favor ingresa tu correo electrónico"
        document.getElementById("InputCorreo").style.backgroundColor="red"
        document.getElementById("InputCorreo").style.color="white"
    } else if (!validarEmail(email)) {
        document.getElementById("InputCorreo").value = "Por favor ingresa un correo electrónico válido"
        document.getElementById("InputCorreo").style.backgroundColor="red"
        document.getElementById("InputCorreo").style.color="white"
        document.getElementById("InputCorreo").style.fontSize="20px"
    }
});

document.getElementById("InputCorreo").addEventListener("focus", function (event) {
    var correo = document.getElementById("InputCorreo");
    correo.value = ""
    correo.style.backgroundColor="white"
    correo.style.color="black"
});

document.getElementById("InputNombre").addEventListener("blur", function (event) {
    var nombre = document.getElementById("InputNombre").value;
    if(!nombre){
        document.getElementById("InputNombre").value = "Por favor ingresa tu nombre"
        document.getElementById("InputNombre").style.backgroundColor="red"
        document.getElementById("InputNombre").style.color="white"
    } else if(!validarNombre(nombre)){
        document.getElementById("InputNombre").value = "Por favor ingresa un nombre válido"
        document.getElementById("InputNombre").style.backgroundColor="red"
        document.getElementById("InputNombre").style.color="white"
    }
});

document.getElementById("InputNombre").addEventListener("focus", function (event) {
    var nombre = document.getElementById("InputNombre");
    nombre.value = ""
    nombre.style.backgroundColor="white"
    nombre.style.color="black"
});

document.getElementById("InputContra").addEventListener("blur", function (event) {
    var contraseña = document.getElementById("InputContra").value;
    if(!contraseña){
        document.getElementById("InputContra").value = "Por favor ingresa tu contraseña"
        document.getElementById("InputContra").style.backgroundColor="red"
        document.getElementById("InputContra").style.color="white"
        document.getElementById("InputContra").setAttribute("type", "text")
    } else if(!validarContraseña(contraseña)){
        document.getElementById("InputContra").value = "Por favor ingresa una contraseña válida"
        document.getElementById("InputContra").style.backgroundColor="red"
        document.getElementById("InputContra").style.color="white"
        document.getElementById("InputContra").setAttribute("type", "text")
    }
});

document.getElementById("InputContra").addEventListener("focus", function (event) {
    var contraseña = document.getElementById("InputContra");
    contraseña.value = ""
    contraseña.style.backgroundColor="white"
    contraseña.style.color="black"
    document.getElementById("InputContra").setAttribute("type", "password")
});

document.getElementById("InputCodPos").addEventListener("blur", function (event) {
    var cod = document.getElementById("InputCodPos").value;
    if(!cod){
        document.getElementById("InputCodPos").value = "Por favor ingresa tu dirección postal"
        document.getElementById("InputCodPos").style.backgroundColor="red"
        document.getElementById("InputCodPos").style.color="white"
    } else if(!validarCodPos(cod)){
        document.getElementById("InputCodPos").value = "Por favor ingresa un código postal válido"
        document.getElementById("InputCodPos").style.backgroundColor="red"
        document.getElementById("InputCodPos").style.color="white"
    }
});

document.getElementById("InputCodPos").addEventListener("focus", function (event){
    var cod = document.getElementById("InputCodPos")
    cod.value = ""
    cod.style.backgroundColor="white"
    cod.style.color="black"
})

document.getElementById("InputEdad").addEventListener("blur", function (event) {
    var edad = document.getElementById("InputEdad").value;
    if(!edad){
        document.getElementById("InputEdad").setAttribute("type", "text")
        document.getElementById("InputEdad").value = "Por favor ingresa tu edad"
        document.getElementById("InputEdad").style.backgroundColor="red"
        document.getElementById("InputEdad").style.color="white"
    } else if(!validarEdad(edad)){
        document.getElementById("InputEdad").style.backgroundColor="red"
        document.getElementById("InputEdad").style.color="white"
        document.getElementById("InputEdad").setAttribute("type", "text")
        document.getElementById("InputEdad").value = "Por favor ingresa una edad válida"
    }
});

document.getElementById("InputEdad").addEventListener("focus", function (event){
    var edad = document.getElementById("InputEdad")
    edad.value = ""
    edad.style.backgroundColor="white"
    edad.style.color="black"
    document.getElementById("InputEdad").setAttribute("type", "number")
})

document.getElementById("InputTele").addEventListener("blur", function (event) {
    var telefono = document.getElementById("InputTele").value;
    if(!telefono){
        document.getElementById("InputTele").value = "Por favor ingresa tu teléfono"
        document.getElementById("InputTele").style.backgroundColor="red"
        document.getElementById("InputTele").style.color="white"
    } else if(!validarTelefono(telefono)){
        document.getElementById("InputTele").value = "Por favor ingresa un teléfono válido"
        document.getElementById("InputTele").style.backgroundColor="red"
        document.getElementById("InputTele").style.color="white"
    }
});

document.getElementById("InputTele").addEventListener("focus", function (event){
    var telefono = document.getElementById("InputTele")
    telefono.value = ""
    telefono.style.backgroundColor="white"
    telefono.style.color="black"
})

document.getElementById("InputDireccion").addEventListener("blur", function (event){
    var dirección = document.getElementById("InputDireccion").value;
    if(!dirección){
        document.getElementById("InputDireccion").value = "Por favor ingresa tu dirección"
        document.getElementById("InputDireccion").style.backgroundColor="red"
        document.getElementById("InputDireccion").style.color="white"
    }else if(!validarDireccion(dirección)){
        document.getElementById("InputDireccion").value = "Por favor ingresa una dirección correcta"
        document.getElementById("InputDireccion").style.backgroundColor="red"
        document.getElementById("InputDireccion").style.color="white"
    }
})

document.getElementById("InputDireccion").addEventListener("focus", function (event){
    var dirección = document.getElementById("InputDireccion")
    dirección.value = ""
    dirección.style.backgroundColor="white"
    dirección.style.color="black"
})

document.getElementById("InputDNI").addEventListener("blur", function(event){
    var DNI = document.getElementById("InputDNI").value;
    if(!DNI){
        document.getElementById("InputDNI").value = "Por favor ingresa tu DNI"
        document.getElementById("InputDNI").style.backgroundColor="red"
        document.getElementById("InputDNI").style.color="white"
    } else if(!validarDNI(DNI)){
        document.getElementById("InputDNI").value = "Por favor ingresa un DNI válido"
        document.getElementById("InputDNI").style.backgroundColor="red"
        document.getElementById("InputDNI").style.color="white"
    }
})

document.getElementById("InputDNI").addEventListener("focus", function (event){
    var telefono = document.getElementById("InputDNI")
    telefono.value = ""
    telefono.style.backgroundColor="white"
    telefono.style.color="black"
})

function validarContraseña(contraseña){
    var regexContra = /^(?=.{8,}).*$/;
    return regexContra.test(contraseña)
}

function validarNombre(nombre){
    var regexNom = /^(?=.*\s)(?=.{7,}).*$/;
    return regexNom.test(nombre)
}

function validarEmail(email) {
    var regexCorreo = /\S+@\S+\.\S+/;
    return regexCorreo.test(email);
}

function validarCodPos(codPos) {
    var regexCodPos = /^.{3,}$/
    return regexCodPos.test(codPos)
}

function validarEdad(edad){
    var edadMinima = 18
    return edad >= edadMinima
}

function validarTelefono(tele){
    var regexTel = /^\d{7,}$/
    return regexTel.test(tele)
}

function validarDireccion(dire){
    var regexDirec = /^(?=.*\s).{7,}(\d{1,4}).*$/
    return regexDirec.test(dire)
}

function validarDNI(documento){
    var regexDNI = /^\d{7,8}$/
    return regexDNI.test(documento)
}