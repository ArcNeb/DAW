function enviar_datos(nombre, correo) {
    
}

function guardar_datos(nombre, correo){
    localStorage.setItem("NOMBRE", nombre)
    localStorage.setItem("CORREO", correo)
}

function remover_datos(){
    localStorage.removeItem("NOMBRE", nombre)
    localStorage.removeItem("CORREO", correo)
}