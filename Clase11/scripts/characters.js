
async function obtenerPersonajesTodos() {
    var res = await fetch("https://rickandmortyapi.com/api/character")

    var resConvertida = await res.json()

    return resConvertida
}

document.getElementById("AllCharactersButton").addEventListener("click", function (event) {
    try {
        var personajesPromise = obtenerPersonajesTodos()
        personajesPromise
            .then(valores => arregloTodosPersonajes(valores.results))
            .then(res => colocarTodosPersonajes(res))
    } catch (error) {
        console.log(error)
    }

})

function arregloTodosPersonajes(resultados) {
    var array = []

    resultados.forEach(res => {
        array.push(res)
    });

    return array
}

function colocarTodosPersonajes(arreglo) {
    var personajesExistentes = document.getElementsByClassName("Character")
    var personajesContenedor = document.getElementById("CharacterContainer")

    if (personajesExistentes.length > 0) {
        // console.log("Habian Personajes")
        return
    } else {
        // console.log("No habian Personajes existentes")
    }

    arreglo.forEach(element => {
        var Character = document.createElement("div")
        var CharacterName = document.createElement("h2")
        var CharacterStatus = document.createElement("h3")
        var CharacterSpecies = document.createElement("p")
        var CharacterIMG = document.createElement("img")
        var CharacterType = document.createElement("p")
        var CharacterGender = document.createElement("p")

        Character.className = "Character"
        Character.id = `${element.name}--Tag`

        CharacterName.innerHTML = `${element.name}`

        CharacterStatus.innerHTML = `${element.status}`

        CharacterSpecies.innerHTML = `${element.species}`

        CharacterIMG.src = `${element.image}`
        CharacterIMG.alt = `${element.name}`

        CharacterType.innerHTML = `${element.type}`

        CharacterGender.innerHTML = `${element.gender}`

        personajesContenedor.insertAdjacentElement("beforeend", Character)

        document.getElementById(`${element.name}--Tag`).insertAdjacentElement("afterbegin", CharacterType)
        document.getElementById(`${element.name}--Tag`).insertAdjacentElement("afterbegin", CharacterGender)
        document.getElementById(`${element.name}--Tag`).insertAdjacentElement("afterbegin", CharacterSpecies)
        document.getElementById(`${element.name}--Tag`).insertAdjacentElement("afterbegin", CharacterStatus)
        document.getElementById(`${element.name}--Tag`).insertAdjacentElement("afterbegin", CharacterName)
        document.getElementById(`${element.name}--Tag`).insertAdjacentElement("afterbegin", CharacterIMG)
    })

    // document.getElementById("CharacterContainer").forEach(element => {
    // var CharacterName = document.createElement("h2")
    // CharacterName.innerHTML = `${element.name}`

    // var CharacterStatus = document.createElement("h3")
    // var CharacterSpecies = document.createElement("p")
    // var CharacterIMG = document.createElement("img")

    //     document.getElementById(element.id).insertAdjacentElement("beforebegin", CharacterName)
    // })
}
