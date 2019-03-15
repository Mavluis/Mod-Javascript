"use strict";

function changeDolar(euro) {
  if (!isFinite(euro)) {
    return "Error";}
  return euro * 1.123;
}

console.log(changeDolar(15));
console.log(changeDolar(25));
console.log(changeDolar("vjfhfj"));
console.log(changeDolar(15));
console.log(changeDolar(15));

