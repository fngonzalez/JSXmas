function manejarErrores() {
    let tomarValores = tomarValoresDeInputs();
    let valorNombre = tomarValores[2];
    let valorProvincia = tomarValores[0];
    let valorRegalo = tomarValores[1];
    let errores = {
        nombre: validarNombre(valorNombre),
        ciudad: validarProvincia(valorProvincia),
        'descripcion-regalo': validarRegalo(valorRegalo)
    }
    let i = 0;
    keys = Object.keys(errores);

    keys.forEach(function (key) {
        error = errores[key];
        if (error) {

            mostrarError(document.formulario[key]);
            if (!formIncluyeError(error)) {
                mostrarErrorDeValidacion(error, key);
                console.log(i);
            }
            i++;
        }
        if (!error) {
            mostrarNormal(document.formulario[key]);
            // console.log(erroresQueSeMuestran());
        }
    
    });

    if (!i){
        document.getElementById('exito').className=''
        document.formulario.className='oculto'
        setTimeout(function(){ window.location.href = 'file:///C:/Users/Rodolfo/Documents/GitHub/JSXmas/js-xmas-edition-master/wishlist.html'; }, 5000);
    }

}

$botonSubmit = document.querySelector("#enviar-carta")

$botonSubmit.onclick = function () {
    limpiarFormulario()
    manejarErrores()
    return false

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function tomarValoresDeInputs() {
    let direcciones = obtenerDirecciones();
    let nombre = direcciones[0].value;
    let provincia = direcciones[1].value;
    let regalo = direcciones[2].value;
    let inputs = [provincia, regalo, nombre];
    return inputs;
}

function obtenerDirecciones() {
    //no se muy bien como llamar a esta funcion, entiendo que serian una especie de "links"
    let $form = obtenerFormulario();
    let direccionNombre = $form.nombre;
    let direccionProvincia = $form.ciudad;
    let direccionRegalo = $form['descripcion-regalo'];
    let direcciones = [direccionNombre, direccionProvincia, direccionRegalo];
    return direcciones;
}

function validarNombre(nombre) {
    if (nombre.length > 50) {
        return returnValidarNombre.demasiados;
    }
    else if (nombre.length < 1) {
        return returnValidarNombre.vacio;
    }
    else {
        if (esAlfabetico(nombre)) {
            return returnValidarNombre.bien;
        }
        return returnValidarNombre.vacio;
    }
}

function validarProvincia(provincia) {
    let arrayDeProvincias = obtenerArrayProvincias()

    if (arrayDeProvincias.includes(provincia)) {
        return returnValidarProvincia.bien;
    }
    else {
        return returnValidarProvincia.mal;
    }
}

function validarRegalo(regalo) {
    if (regalo.length > 250) {
        return returnValidarRegalo.demasiados;
    }
    else if (regalo.length < 2) {
        return returnValidarRegalo.vacio;
    }
    else {
        if (!esAlfanumerico(regalo)) {
            return returnValidarRegalo.vacio;
        }
        return returnValidarRegalo.bien;

    }
}

let mostrarError = function (formulario) {
    formulario.className = 'error';
}
let mostrarNormal = function (formulario) {
    formulario.className = '';
}

let returnValidarNombre = {
    vacio: "Tu nombre debe tener al menos 1 caracter, y todos deben ser alfabeticos",
    bien: '',
    demasiados: "Tu nombre no puede tener mas de 50 caracteres"
}
let returnValidarProvincia = {
    bien: '',
    mal: 'La provincia seleccionada no es perteneciente a ningún valor'
}
let returnValidarRegalo = {
    vacio: "La descripción de tu regalo debe tener al menos de 2 caracteres, y todos deben ser alfanumericos",
    bien: '',
    demasiados: "La descripción de tu regalo debe tener menos de 250 caracteres"
}

function esAlfabetico(string) {
    return /^[A-Z ]+$/i.test(string);
}

function esAlfanumerico(string) {
    return /^[A-Z0-9,\. ]+$/i.test(string);
}

function mostrarErrorDeValidacion(error) {
    let $errores = document.querySelector('#errores');
    let $lugarParaInsertarElError = document.createElement('li');
    $lugarParaInsertarElError.id = "errores-para-mostrar";
    $lugarParaInsertarElError.innerText = error;
    $errores.appendChild($lugarParaInsertarElError);
}

function formIncluyeError(error) {
    let erroresEnUnaLista = erroresQueSeMuestran();
    return erroresEnUnaLista.includes(error);
}

function erroresQueSeMuestran() {
    let $erroresMostrados = document.querySelectorAll("#errores-para-mostrar");
    let erroresEnUnaLista = convertirTextoEnNodeListAArray($erroresMostrados);
    return erroresEnUnaLista;
}

function comprobarSiExiste(error) {
    let errorEnPagina = document.querySelector("errores-para-mostrar");
    return (error == errorEnPagina);
}

function limpiarFormulario () {
    let nodoErrorEnFormulario= document.getElementById("errores")
    return nodoErrorEnFormulario.innerText=""
}
