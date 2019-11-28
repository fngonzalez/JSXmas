
$form = document.querySelector("#carta-a-santa")

let provincia = $form.ciudad.value
let regalo = $form["descripcion-regalo"].value


function validarRegalo(regalo) {
    if (regalo.length === 0) {
        return "Este campo debe tener al menos 2 caracteres"
    }
    else if (regalo.length <= 2) {
        return "Este campo debe contener al menos más de 2 caracteres"
    }
    else if (regalo.length > 250) {
        return "Este campo debe tener menos de 250 caracteres"
    }
    return ""
}


function validarProvincia(provincia) {

    if (provincia == "Bs. As."
        || provincia == "Chaco"
        || provincia == "Chubut"
        || provincia == "Corrientes"
        || provincia == "Entre Rios"
        || provincia == "Formosa"
        || provincia == "Jujuy"
        || provincia == "La Pampa"
        || provincia == "La Rioja"
        || provincia == "Mendoza"
        || provincia == "Misiones"
        || provincia == "Neuquen"
        || provincia == "Rio Negro"
        || provincia == "Salta"
        || provincia == "San Juan"
        || provincia == "San Luis"
        || provincia == "Santa Cruz"
        || provincia == "Santa Fe"
        || provincia == "Sgo. del Ester"
        || provincia == "Tierra del Fuego"
        || provincia == "Tucuman"
    ) {
        return ""
    } else {
        return 'La provincia seleccionada no es perteneciente a ningún valor'
    }
}

