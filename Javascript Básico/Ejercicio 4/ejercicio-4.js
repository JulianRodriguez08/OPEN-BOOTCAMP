
let nombre = "Julián";
let apellido = "Rodríguez";

let estudiante = nombre.concat(" ", apellido); 

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLocaleLowerCase();

let numLetras = estudiante.length;
let primerLetraNombre = estudiante.charAt(0);
let ultimaLetraApellido = estudiante.charAt(numLetras-1);

let sinEspacios = estudiante.replace(/ /g, "");

let contiene = estudiante.includes(nombre)

console.log(contiene)