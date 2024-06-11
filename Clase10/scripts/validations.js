document.getElementById("InputCorreo").addEventListener("blur", function(event) {
    var email = document.getElementById("InputCorreo").value;
    if (!email) {
        document.getElementById("InputCorreo").value = "Por favor ingresa tus datos"
        document.getElementById("InputCorreo").style.backgroundColor="red"
        document.getElementById("InputCorreo").style.color="white"
    } else if (!validarEmail(email)) {
        document.getElementById("InputCorreo").value = "Por favor ingresa datos válidos"
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
        document.getElementById("InputNombre").value = "Por favor ingresa tus datos"
        document.getElementById("InputNombre").style.backgroundColor="red"
        document.getElementById("InputNombre").style.color="white"
    } else if(!validarNombre(nombre)){
        document.getElementById("InputNombre").value = "Por favor ingresa datos válidos"
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
        document.getElementById("InputContra").value = "Por favor ingresa tus datos"
        document.getElementById("InputContra").style.backgroundColor="red"
        document.getElementById("InputContra").style.color="white"
        document.getElementById("InputContra").setAttribute("type", "text")
    } else if(!validarContraseña(contraseña)){
        document.getElementById("InputContra").value = "Por favor ingresa datos válidos"
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
        document.getElementById("InputCodPos").value = "Por favor ingresa tus datos"
        document.getElementById("InputCodPos").style.backgroundColor="red"
        document.getElementById("InputCodPos").style.color="white"
    } else if(!validarCodPos(cod)){
        document.getElementById("InputCodPos").value = "Por favor ingresa datos válidos"
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
        document.getElementById("InputEdad").value = "Por favor ingresa tus datos"
        document.getElementById("InputEdad").style.backgroundColor="red"
        document.getElementById("InputEdad").style.color="white"
    } else if(!validarEdad(edad)){
        document.getElementById("InputEdad").style.backgroundColor="red"
        document.getElementById("InputEdad").style.color="white"
        document.getElementById("InputEdad").setAttribute("type", "text")
        document.getElementById("InputEdad").value = "Por favor ingresa datos válidos"
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
        document.getElementById("InputTele").value = "Por favor ingresa tus datos"
        document.getElementById("InputTele").style.backgroundColor="red"
        document.getElementById("InputTele").style.color="white"
    } else if(!validarTelefono(telefono)){
        document.getElementById("InputTele").value = "Por favor ingresa datos válidos"
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
        document.getElementById("InputDireccion").value = "Por favor ingresa tus datos"
        document.getElementById("InputDireccion").style.backgroundColor="red"
        document.getElementById("InputDireccion").style.color="white"
    }else if(!validarDireccion(dirección)){
        document.getElementById("InputDireccion").value = "Por favor ingresa datos válidos"
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
        document.getElementById("InputDNI").value = "Por favor ingresa tus datos"
        document.getElementById("InputDNI").style.backgroundColor="red"
        document.getElementById("InputDNI").style.color="white"
    } else if(!validarDNI(DNI)){
        document.getElementById("InputDNI").value = "Por favor ingresa datos válidos"
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

document.getElementById("InputCiudad").addEventListener("blur", function(event){
    var ciudad = document.getElementById("InputCiudad").value;
    if(!ciudad){
        document.getElementById("InputCiudad").value = "Por favor ingresa tus datos"
        document.getElementById("InputCiudad").style.backgroundColor="red"
        document.getElementById("InputCiudad").style.color="white"
    } else if(!validarCiudad(ciudad)){
        document.getElementById("InputCiudad").value = "Por favor ingresa datos válidos"
        document.getElementById("InputCiudad").style.backgroundColor="red"
        document.getElementById("InputCiudad").style.color="white"
    }
})

document.getElementById("InputCiudad").addEventListener("focus", function (event){
    var ciudad = document.getElementById("InputCiudad")
    ciudad.value = ""
    ciudad.style.backgroundColor="white"
    ciudad.style.color="black"
})

document.getElementById("BotonSuscripcion").addEventListener("click", async function(event){
    var errores = []

    var nombre = document.getElementById("InputNombre").value;
    var email = document.getElementById("InputCorreo").value;
    var contraseña = document.getElementById("InputContra").value;
    var cod = document.getElementById("InputCodPos").value;
    var edad = document.getElementById("InputEdad").value;
    var telefono = document.getElementById("InputTele").value;
    var dirección = document.getElementById("InputDireccion").value;
    var DNI = document.getElementById("InputDNI").value;
    var ciudad = document.getElementById("InputCiudad").value;

    if(validarNombre(nombre) === false || nombre === "" || nombre === "Por favor ingresa tus datos" || nombre === "Por favor ingresa datos válidos"){
        errores.push("Nombre")
    }
    if(validarEmail(email) === false || email == ""){
        errores.push("Correo")
    }
    if(validarContraseña(contraseña) === false || contraseña === "" || contraseña === "Por favor ingresa tus datos" || contraseña === "Por favor ingresa datos válidos"){
        errores.push("Contraseña")
    }
    if(validarEdad(edad) === false || edad === ""){
        errores.push("Edad")
    }
    if(validarTelefono(telefono) === false || telefono === ""){
        errores.push("Teléfono")
    }
    if(validarDireccion(dirección) === false || dirección === ""){
        errores.push("Dirección")
    }
    if(validarCiudad(ciudad) === false || ciudad === "" || ciudad === "Por favor ingresa tus datos" || ciudad === "Por favor ingresa datos válidos"){
        errores.push("Ciudad")
    }
    if(validarCodPos(cod) === false || cod === "" || cod === "Por favor ingresa tus datos" || cod === "Por favor ingresa datos válidos"){
        errores.push("Código Postal")
    }
    if(validarDNI(DNI) === false || DNI === ""){
        errores.push("DNI")
    }

    if(errores.length != 0){
        var alerta = "Hubieron errores en los siguientes campos. "
        errores.forEach(element => {
            alerta = alerta.concat("\n" + element)
        });
        alert(alerta)
        event.preventDefault()

        document.getElementById("InputNombre").value = "";
        document.getElementById("InputCorreo").value = "";
        document.getElementById("InputContra").value = "";
        document.getElementById("InputCodPos").value = "";
        document.getElementById("InputEdad").value = "";
        document.getElementById("InputTele").value = "";
        document.getElementById("InputDireccion").value = "";
        document.getElementById("InputDNI").value = "";
        document.getElementById("InputCiudad").value = "";

        return
    }

    var conjunto = []

    conjunto.push(nombre)
    conjunto.push(email)
    conjunto.push(contraseña)
    conjunto.push(cod)
    conjunto.push(edad)
    conjunto.push(telefono)
    conjunto.push(dirección)
    conjunto.push(DNI)
    conjunto.push(ciudad)
    
    try{
        resultadoModal(conjunto)
    }
    catch(error){
        console.log("Hubo un error en las validaciones: " + error)
    }

    document.getElementById("InputNombre").value = "";
    document.getElementById("InputCorreo").value = "";
    document.getElementById("InputContra").value = "";
    document.getElementById("InputCodPos").value = "";
    document.getElementById("InputEdad").value = "";
    document.getElementById("InputTele").value = "";
    document.getElementById("InputDireccion").value = "";
    document.getElementById("InputDNI").value = "";
    document.getElementById("InputCiudad").value = "";

    alert("La suscripción fue un éxito")
    event.preventDefault()
})

async function resultadoModal(datos){
    var modal_resultado = await enviar_datos(datos)
    console.log(modal_resultado.body)
}

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

function validarCiudad(ciudad) {
    var regexCiudad = /^.{3,}$/
    return regexCiudad.test(ciudad)
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