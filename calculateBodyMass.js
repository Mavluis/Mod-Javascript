/* *Write a program that gives the height in meters of a person and their age,
get your recommended body mass index (IMC) based on the following formula:*.
*IMC = (Weight in kilograms / Height (in meters) squared)*/

/* If the imc is greater than 25, say there is some overweight.
If it is less than 19, say it is too thin.
If you're between 19 and 25 say everything's okay */

const weight = 80;
const height = 1.7;
const imc = (weight / (height * height)).toFixed(2);
console.log(imc);
if (imc > 25) {
console.log("You are overweight!!!");
}
if (imc >= 19 && imc <= 25) {
console.log("You're OK");
}
if (imc < 19) console.log("Too thin");

