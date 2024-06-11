// var A = []

// A.push("Hola")
// A.push("Hola")
// A.push("Hola")
// A.push("Hola")
// A.push("Hola")
// A.push("Hola")
// A.push("Hola")
// A.push("Hola")
// A.push("Hola")

async function enviar_datos(datos) {
  try {
    var resultados = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        title: "Datos",
        body: JSON.stringify({
          name: datos[0],
          email: datos[1],
          password: datos[2],
          postal_code: datos[3],
          age: datos[4],
          phone_number: datos[5],
          direction: datos[6],
          dni: datos[7],
          city: datos[8],
        }),
        id: 11
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    // console.log(resultados)
    if (resultados.ok === true) {
      var informacion = await resultados.json()
      guardar_datos(datos)
      return informacion
    }
    return -1
  }
  catch {

  }

}

function guardar_datos(datos) {
  localStorage.setItem("NOMBRE", datos[0])
  localStorage.setItem("CORREO", datos[1])
  localStorage.setItem("CONTRASEÑA", datos[2])
  localStorage.setItem("COD_POS", datos[3])
  localStorage.setItem("EDAD", datos[4])
  localStorage.setItem("TELEFONO", datos[5])
  localStorage.setItem("DIRECCION", datos[8])
  localStorage.setItem("DNI", datos[7])
  localStorage.setItem("CIUDAD", datos[8])
  console.log(localStorage)
}

function remover_datos(datos) {
  localStorage.removeItem("NOMBRE", datos[0])
  localStorage.removeItem("CORREO", datos[1])
}

// enviar_datos(A)