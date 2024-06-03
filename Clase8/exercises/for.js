console.log("---------------------")
console.log("Ejercicio 5")
console.log("---------------------")

/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/

var array = ["chocolatada", "leche", "hoja", "calculadora", "ahora"]

for (let index = 0; index < array.length; index++) {
    console.log("Alerta: " + array[index])
}

/*b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.*/

for (let index = 0; index < array.length; index++) {
    console.log("Alerta modificada: " + array[index].substring(0, 1).toUpperCase() + array[index].substring(1))
}

/*c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.*/

array = ["chocolatada", "leche", "hoja", "calculadora", "ahora"]
var sentence = ""

for (let index = 0; index < array.length; index++) {
    sentence = sentence.concat(array[index])
}
console.log(sentence)

/*d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log). */

var ArrayVacio = []

for (let index = 0; index < 10; index++) {
    ArrayVacio.push(index)    
}

console.log(ArrayVacio)