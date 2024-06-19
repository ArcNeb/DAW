
async function obtenerPersonajesTodos() {
    var res = await fetch("https://rickandmortyapi.com/api/character")

    var valores = await res.json()

    console.log(valores.results)
}

obtenerPersonajesTodos()