console.log("---------------------")
console.log("Ejercicio 6")
console.log("---------------------")

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

function suma1(numero1, numero2) {
    return numero1 + numero2   
}

console.log(suma1(25, 5))

/*b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

function suma(numero1, numero2) {
    
    console.log(typeof numero1, typeof numero2)
    
    if((typeof numero1 || typeof numero2) != "number"){
        console.log("La operacion no es válida")
        return NaN
    }
    return numero1 + numero2   
}

console.log(suma(25, 30))
/*c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.*/

function validate(NumeroValidar) {
    if(typeof NumeroValidar != "number"){
        console.log("La operacion no es válida")
        return NaN
    }

    var NumeroString = NumeroValidar.toString()

    if(!(NumeroString.includes("."))){
        return false
    }

    return true
}

console.log(validate(52.3))

/*d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con elerror y retorna el número convertido a entero (redondeado).*/

function suma_d(numero1, numero2){

    if((typeof numero1 || typeof numero2) != "number"){
        console.log("La operacion no es válida")
        return NaN
    }

    var NumeroString1 = numero1.toString()
    var NumeroString2 = numero2.toString()

    console.log(NumeroString1)

    if(NumeroString1.includes(".") && NumeroString2.includes(".")){
        return "Error en ambos numeros. Sus equivalente como numeros enteros son: " + NumeroRedondeado1 + " y " + NumeroRedondeado2
    }

    if(NumeroString1.includes(".")){
        var NumeroRedondeado1 = Math.round(numero1)
        return "Error del primer número. Su equivalente entero es: "+ NumeroRedondeado1
    }

    console.log(NumeroString2)
    if(NumeroString2.includes(".")){
        var NumeroRedondeado2 = Math.round(numero2)
        return "Error del segundo número. Su equivalente entero es: " + NumeroRedondeado2
    }

    return numero1 + numero2
}

console.log(suma_d(25,60.5))

/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.*/

function validate_suma_d2(numero1, numero2) {

    var NumeroString1 = numero1.toString()
    var NumeroString2 = numero2.toString()

    var NumeroRedondeado1 = 0
    var NumeroRedondeado2 = 0

    if(NumeroString1.includes(".") && NumeroString2.includes(".")){
        NumeroRedondeado1 = Math.round(numero1)
        NumeroRedondeado2 = Math.round(numero2)
        return [3, NumeroRedondeado1, NumeroRedondeado2]
    }

    if(NumeroString1.includes(".")){
        NumeroRedondeado1 = Math.round(numero1)
        return [1, NumeroRedondeado1]
    }

    if(NumeroString2.includes(".")){
        NumeroRedondeado2 = Math.round(numero2)
        return [2, NumeroRedondeado2]
    }

    return 0
}

function suma_d2(numero1,numero2){
    if((typeof numero1 || typeof numero2) != "number"){
        console.log("La operacion no es válida")
        return NaN
    }

    var validation = validate_suma_d2(numero1, numero2)

    switch (validation[0]) {
        case 1:
            return "Error del primer número. Su equivalente entero es: "+ validation[1]
        case 2:
            return "Error del segundo número. Su equivalente entero es: " + validation[1]
        case 3:
            return "Error en ambos numeros. Sus equivalente como numeros enteros son: " + validation[1] + " y " + validation[2]
        default:
            return numero1 + numero2
    }    
}

console.log(suma_d2(25.5,60.7))