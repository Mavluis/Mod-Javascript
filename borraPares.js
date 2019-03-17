"use strict";
let names = ["Pepe", "Rafa", "Maria", "Loli", "Antonio", "Manuel"];

function del(names) {
  for (let i = 1; i < names.length; i++) {
    names.splice(i, 1);
  }
}
del(names);
console.log(names);
