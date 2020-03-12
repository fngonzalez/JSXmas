
function juntarProvincias(arrayInicial, arrayFinal, arrayLength) {
    for (let i = 1; i < arrayLength; i++) {
        arrayFinal.push(arrayInicial[i].value)
    }
    return arrayFinal
}

function tomarOpciones() {
    provinciasEnForm = $form.ciudad.options
    arrayDeProvincias = []
    lengthProvincias = provinciasEnForm.length
    arrayDeProvincias = juntarProvincias(provinciasEnForm, arrayDeProvincias, lengthProvincias)
    return arrayDeProvincias
}

function pruebaValidacion(funcion, parametro, returnDeLaFuncion, mensajeDeError) {
    console.assert(funcion(parametro) === returnDeLaFuncion, mensajeDeError)
}

function provinciaValida() {
    arrayDeProvincias = tomarOpciones()
    let returnValidarProvincia1 = ""
    let mensajeDeError1 = "No se esta validando que la opcion sea igual al texto"
    for (let i = 1; i < arrayDeProvincias.length; i++) {
        pruebaValidacion(validarProvincia, arrayDeProvincias[i], returnValidarProvincia1, mensajeDeError1)
    }
}

function provinciaInvalida() {
    provinciaInvalida = 'Oklahoma'
    returnValidarProvincia2 = 'La provincia seleccionada no es perteneciente a ningún valor'
    mensajeDeError2 = "La prov no coincide con la validación"

    pruebaValidacion(validarProvincia, provinciaInvalida, returnValidarProvincia2, mensajeDeError2)
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function probarValidarProv() {
    provinciaValida()
    provinciaInvalida()
}
probarValidarProv()


function probarValidarRegalo() {
    mensaje1 = "Este es un texto en el que necesariamente tienen que existir 250 caracteres. Esto es para conocer si es que el contador de letras de mi programa (el cual es la septima tarea del curso de programación para principiantes) está funcionando de una manera adecuada"
    mensaje2 = ""
    mensaje3 = "Deseo un buen café por las mañanas"
    retorna1 = "Este campo debe tener menos de 250 caracteres"
    retorna2 = "Este campo debe contener al menos más de 2 caracteres"
    retorna3 = ""
    error1 = "La prueba de validarRegalo, no validó que haya menos de 250 caracteres"
    error2 = "La prueba de validarRegalo no probó que se hayan escrito más de dos caracteres"
    error3 = "La prueba de validarRegalo no probó que se haya escrito bien el regalo"

    pruebaValidacion(validarRegalo, mensaje1, retorna1, error1)
    pruebaValidacion(validarRegalo, mensaje2, retorna2, error2)
    pruebaValidacion(validarRegalo, mensaje3, retorna3, error3)

}
probarValidarRegalo()