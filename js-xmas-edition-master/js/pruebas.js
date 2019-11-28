// function probarValidarNombre() {
//   console.assert(
//       validarNombre('') === 'Este campo debe tener al menos 1 caracter',
//       'Validar nombre no validó que el nombre no sea vacío',
//   );

//   console.assert(
//       validarNombre(
//           '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
//       'Este campo debe tener menos de 50 caracteres',
//       'Validar nombre no validó que el nombre sea menor a 50 caracteres',
//   );
// }

// probarValidarNombre();




function probarValidarProvincia() {
    console.assert(
        validarProvincia("algun valor no introducido") ===
        'La provincia seleccionada no es perteneciente a ningún valor',
        "La prueba de validarProvincia no validó la función validarProvincia"
    )
    console.assert(
        validarProvincia("Bs. As.") === ""
        || validarProvincia("Chaco") === ""
        || validarProvincia("Chubut") === ""
        || validarProvincia("Corrientes") === ""
        || validarProvincia("Entre Rios") === ""
        || validarProvincia("Formosa") === ""
        || validarProvincia("Jujuy") === ""
        || validarProvincia("La Pampa") === ""
        || validarProvincia("La Rioja") === ""
        || validarProvincia("Mendoza") === ""
        || validarProvincia("Misiones") === ""
        || validarProvincia("Neuquen") === ""
        || validarProvincia("Rio Negro") === ""
        || validarProvincia("Salta") === ""
        || validarProvincia("San Juan") === ""
        || validarProvincia("San Luis") === ""
        || validarProvincia("Santa Cruz") === ""
        || validarProvincia("Santa Fe") === ""
        || validarProvincia("Sgo. del Ester") === ""
        || validarProvincia("Tierra del Fuego") === ""
        || validarProvincia("Tucuman") === "",
        "La prueba de validarProvincia no está tomando los valores de las provincias"
    )
}

function probarValidarRegalo() {
    console.assert(
        validarRegalo(" aca hay 22 caracteres aca hay 22 caracteres aca hay 22 caracteres aca hay 22 caracteres aca hay 22 caracteres aca hay 22 caracteres aca hay 22 caracteres aca hay 22 caracteres aca hay 22 caracteres aca hay 22 caracteres aca hay 22 caracteres aca hay 22 caracteres") ===
        "Este campo debe tener menos de 250 caracteres", "La prueba de validarRegalo, no validó que haya menos de 250 caracteres"
    )
    console.assert(
        validarRegalo("") == "Este campo debe tener al menos 2 caracteres",
        "La prueba de validarRegalo no probó que existan mas de 0 caracteres")

    console.assert(
        validarRegalo("i") == "Este campo debe contener al menos más de 2 caracteres",
        "La prueba de validarRegalo no probó que se hayan escrito más de dos caracteres"

    )
    console.assert(
        validarRegalo("Deseo un buen café para tomar por las mañanas") === "",
        "La prueba de validarRegalo no probó que se haya escrito bien el regalo"
    )
}


probarValidarProvincia()
probarValidarRegalo()