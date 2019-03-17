"use strict";
let fecha1 = Date.now();
let fecha = Date.now() / 1000 / 60 / 60 / 24 / 365 + 1970;
console.log(fecha1 + " milisegundos");
console.log("Estás en el " + fecha.toFixed(0));

