/*
NaN - czyli not a number np. a+b = apple+5 = NaN
ale JS pomaga przy np. mnożeniu jak a*b = "7" * 5 = 35
ale w dodawaniu i odejmowaniu już nie
*/

var a = "6"; //jeśli będzie "string" nie będzie to numerem
var b = 5;

// podwójne zaprzeczenie poprzez dodanie  !
if (isNaN(a)){

    console.log("that is not a number");


} else{

console.log("senem życia jest " + (a * b));

}

