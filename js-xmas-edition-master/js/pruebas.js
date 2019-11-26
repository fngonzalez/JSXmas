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


$form= document.querySelector("#carta-a-santa")

let provincia= $form.ciudad.value
let regalo= $form.["descripcion-regalo"].value  
console.log (provincia)
console.log(regalo)
console.assert (provincia === "Chaco."|| "Bs. As.")








// function validarProvincia (provincia){
//      === "Bs. As."
//     ||validarciudad(provincia) === "Chaco"
//     ||validarciudad(provincia) === "Chubut"
//     ||validarciudad(provincia) === "Corrientes"
//     ||validarciudad(provincia) === "Entre Rios"
//     ||validarciudad(provincia) === "Formosa"
//     ||validarciudad(provincia) === "Jujuy"
//     ||validarciudad(provincia) === "La Pampa"
//     ||validarciudad(provincia) === "La Rioja"
//     ||validarciudad(provincia) === "Mendoza"
//     ||validarciudad(provincia) === "Misiones"
//     ||validarciudad(provincia) === "Neuquen"
//     ||validarciudad(provincia) === "Rio Negro"
//     ||validarciudad(provincia) === "Salta"
//     ||validarciudad(provincia) === "San Juan"
//     ||validarciudad(provincia) === "San Luis"
//     ||validarciudad(provincia) === "Santa Cruz"
//     ||validarciudad(provincia) === "Santa Fe"
//     ||validarciudad(provincia) === "Sgo. del Ester"
//     ||validarciudad(provincia) === "Tierra del Fuego"
//     ||validarciudad(provincia) === "Tucuman", 
//     "La selección debe ser una provincia")
// }