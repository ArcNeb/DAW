console.log("---------------------")
console.log("Ejercicio 3")
console.log("---------------------")

/*a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log).*/

var Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log(Meses[4], Meses[10])

/*b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log(Meses.sort())

/*c. Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

var NuevoMeses = Meses
NuevoMeses.push("ElementoUltimo")
NuevoMeses.unshift("ElementoPrimero")

console.log(NuevoMeses)

/*d. Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

console.log(Meses)
console.log(Meses.pop(), Meses.shift())

/*e. Invertir el orden del array (utilizar reverse).*/

console.log(Meses.reverse())

/*f. Unir todos los elementos del array en un único string donde cada mes este
separado por un guión - (utilizar join).*/

console.log(Meses.join("-"))

/*g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
(utilizar slice).*/

Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(Meses.slice(4,11))