
var LINK = "https://rickandmortyapi.com/api/character"


async function obtenerPersonajesTodos() {
    var res = await fetch(LINK)

    var resConvertida = await res.json()

    return resConvertida
}

async function obtenerPersonajesFiltro(nombre, estado, especie, tipo, genero) {
    var parametros = ""

    if (nombre !== "") {
        parametros += "/?name=" + `${nombre}`
    }
    if (estado !== "") {
        console.log(parametros === "")
        if (parametros === "") {
            parametros += "/?status=" + `${estado}`
        } else {
            parametros += "&status=" + `${estado}`
        }

    }
    if (especie !== "") {
        if (parametros === "") {
            parametros += "/?species=" + `${especie}`
        } else {
            parametros += "&species=" + `${especie}`
        }

    }
    if (tipo !== "") {
        if (parametros === "") {
            parametros += "/?type=" + `${tipo}`
        } else {
            parametros += "&type=" + `${tipo}`
        }
    }
    if (genero !== "") {
        if (parametros === "") {
            parametros += "/?gender=" + `${genero}`
        } else {
            parametros += "&gender=" + `${genero}`
        }
    }

    if (parametros === "") {
        return -1
    }
    console.log(LINK + parametros)
    try {
        var res = await fetch(LINK + parametros)

        var resConvertida = await res.json()

        if (!res.ok) {
            if (res.status === 404) {
                return -1
            }
        }
        console.log(resConvertida.info.next)
        if (resConvertida.info.next === null) {
            sessionStorage.setItem("PagSig", null)
            document.getElementById("NextPage").style.visibility = "hidden"
        } else {
            sessionStorage.setItem("PagSig", resConvertida.info.next)
            paginacion.style.display = "flex"
        }
        if (resConvertida.info.prev === null) {
            sessionStorage.setItem("PagPrev", null)
            document.getElementById("PrevPage").style.visibility = "hidden"
            paginacion.style.display = "flex"
        }



    } catch (error) {
        console.log(error)
    }
    return resConvertida

}

function arregloPersonajes(resultados) {
    var array = []

    if (resultados === undefined) {
        return undefined
    }
    resultados.forEach(res => {
        array.push(res)
    });

    return array
}

function colocarPersonajesFiltrados(arreglo) {

    var personajesExistentes = document.getElementsByClassName("Character")
    var personajesContenedor = document.getElementById("CharacterContainer")

    if (arreglo === undefined) {
        var contenerdor = document.createElement("div")
        contenerdor.id = "NoCharacterFound"
        var resultadoVacio = document.createElement("h2")
        resultadoVacio.innerHTML = "No se encontraron resultados"

        contenerdor.insertAdjacentElement("afterbegin", resultadoVacio)
        personajesContenedor.insertAdjacentElement("afterbegin", contenerdor)

        paginacion.style.display = "none"
        return
    }

    if (document.getElementById("NoCharacterFound")) {
        document.getElementById("NoCharacterFound").remove()
    }

    if (personajesExistentes.length > 0) {
        // console.log("Habian Personajes")
        personajesContenedor.innerHTML = ""
    } else {
        var resultadoVacio = document.getElementById("NoCharacterFound")
        if (resultadoVacio) {
            resultadoVacio.remove()
        }

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
        Character.id = `${element.name}--${element.type}--Tag`

        CharacterName.innerHTML = `${element.name}`

        CharacterStatus.innerHTML = `${element.status}`

        CharacterSpecies.innerHTML = `${element.species}`

        CharacterIMG.src = `${element.image}`
        CharacterIMG.alt = `${element.name}`

        CharacterType.innerHTML = `${element.type}`

        CharacterGender.innerHTML = `${element.gender}`

        if (document.getElementById(`${element.name}--${element.type}--Tag`)) {
            document.getElementById(`${element.name}--${element.type}--Tag`).remove()
        }

        personajesContenedor.insertAdjacentElement("beforeend", Character)

        document.getElementById(`${element.name}--${element.type}--Tag`).insertAdjacentElement("afterbegin", CharacterType)
        document.getElementById(`${element.name}--${element.type}--Tag`).insertAdjacentElement("afterbegin", CharacterGender)
        document.getElementById(`${element.name}--${element.type}--Tag`).insertAdjacentElement("afterbegin", CharacterSpecies)
        document.getElementById(`${element.name}--${element.type}--Tag`).insertAdjacentElement("afterbegin", CharacterStatus)
        document.getElementById(`${element.name}--${element.type}--Tag`).insertAdjacentElement("afterbegin", CharacterName)
        document.getElementById(`${element.name}--${element.type}--Tag`).insertAdjacentElement("afterbegin", CharacterIMG)
    })
}

function colocarPersonajes(arreglo) {
    var personajesExistentes = document.getElementsByClassName("Character")
    var personajesContenedor = document.getElementById("CharacterContainer")

    // if (personajesExistentes.length > 0) {
    //     // console.log("Habian Personajes")

    //     return
    // } else {
    //     var resultadoVacio = document.getElementById("NoCharacterFound")
    //     if (resultadoVacio) {
    //         resultadoVacio.remove()
    //     }

    //     // console.log("No habian Personajes existentes")
    // }

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
}

document.getElementById("SearchWithFilter").addEventListener("click", function (event) {

    if (document.getElementsByClassName("Character").length > 0) {
        var personajesContenedor = document.getElementById("CharacterContainer")
        personajesContenedor.innerHTML = ""
    }

    var nombre = document.getElementById("FieldName").getElementsByTagName("input")[0].value

    var tipo = document.getElementById("FieldType").getElementsByTagName("input")[0].value

    var estadosPosibles = document.getElementsByName("status")
    var estado = ""
    estadosPosibles.forEach(element => {
        if (element.checked) {
            estado = element.value
        }
    })

    var especiesPosibles = document.getElementsByName("specie")
    var especie = ""
    especiesPosibles.forEach(element => {
        if (element.checked) {
            especie = element.value
        }
    })

    var generosPosibles = document.getElementsByName("gender")
    var genero = ""
    generosPosibles.forEach(element => {
        if (element.checked) {
            genero = element.value
        }
    })

    try {
        var personajesPromise = obtenerPersonajesFiltro(nombre, estado, especie, tipo, genero)

        // if () {
        //     console.log("No hubo resultados")
        //     return
        // }

        personajesPromise
            .then(valores => arregloPersonajes(valores.results))
            .then(res => colocarPersonajesFiltrados(res))
        document.getElementById("BackgroundForm").style.display = "none"

    } catch (error) {
        console.log(error)
    }
})

document.getElementById("AllCharactersButton").addEventListener("click", function (event) {
    try {
        if (document.getElementsByClassName("Character").length > 0) {
            var personajesContenedor = document.getElementById("CharacterContainer")
            personajesContenedor.innerHTML = ""
        }

        var personajesPromise = obtenerPersonajesTodos()
        personajesPromise
            .then(valores => arregloPersonajes(valores.results))
            .then(res => colocarPersonajes(res))
    } catch (error) {
        console.log(error)
    }
})




