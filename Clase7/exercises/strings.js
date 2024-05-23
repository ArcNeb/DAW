console.log("Ejercicio 2")
console.log("---------------------")
/*a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
texto en mayúscula (utilizar toUpperCase).*/

var Palabras = "power"
var PowerPlus = Palabras.toUpperCase()

console.log(PowerPlus)

/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring).*/

var reloj = "relojDeOroPuro"
var PrimerosCaracteres5 = reloj.substring(0,5)

console.log(PrimerosCaracteres5)

/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable
(utilizar substring).*/

var globo = "globoPlateado"
var UltimosCaracteres3 = globo.substring(globo.length - 3)

console.log(UltimosCaracteres3)

/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
el operador +).*/

var Mensajero = "mENSAJEROMENSAJES"
var PrimeraLetra = Mensajero.substring(0,1).toUpperCase()
var RestoLetras = Mensajero.substring(1).toLocaleLowerCase()

var MensajeroCompleto = PrimeraLetra + RestoLetras

console.log(MensajeroCompleto)

/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf).*/

var CadenaNueva = "Ahora hay algo nuevo"
var PrimerEspacioBlanco = CadenaNueva.indexOf(" ")

console.log(PrimerEspacioBlanco)

/*f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +).*/

var PalabrasLargas = "psIcOloGoS psIcoPatAs"
var Psicologos = PalabrasLargas.substring(0,1).toUpperCase() + PalabrasLargas.substring(1, PalabrasLargas.indexOf(" ")).toLowerCase()

var Psicopatas = PalabrasLargas.substring(PalabrasLargas.indexOf(" "),PalabrasLargas.indexOf(" ")+2).toUpperCase() + PalabrasLargas.substring(PalabrasLargas.indexOf(" ")+2).toLowerCase()

console.log(Psicologos + Psicopatas)

