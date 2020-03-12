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
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





$form = document.querySelector("#carta-a-santa")
let provincia = $form.ciudad.value
let regalo = $form["descripcion-regalo"].value


function validarRegalo(regalo) {
    if (regalo.length <= 2) {
        return "Este campo debe contener al menos más de 2 caracteres"
    }
    else if (regalo.length > 250) {
        return "Este campo debe tener menos de 250 caracteres"
    }
    return ""
}


function validarProvincia(provincia) {
    arrayDeProvincias = tomarOpciones()
    if (arrayDeProvincias.includes(provincia)) { return "" }
    else { return 'La provincia seleccionada no es perteneciente a ningún valor' }
}

