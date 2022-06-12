/*numer w java uzywamy bez "", 
gdyż jest to wtedy wyrażenie nieliczbowe a pisane 
np. "5" + 5 da 55, ale 5 + 5 da 10 gdyż sa to 2 liczby*/

var a = "5";
var b = 5;

console.log(a + b);

console.log(typeof (a + b) );
/* wywołuje do konsoli typ jaki był użyty w tym przypadku
"string" + liczba */

console.log(Math.round(7.5)); 
console.log(Math.max(1,2,5,9,3));
console.log(Math.PI);

/* math.round zaokrągla w górę lub dół
math.floor zaokrągla zawsze w dół
math.ceil zaokrągla zaawsze w górę
math.max wybiera najwyższą liczbę
math.min wybiera najniższą liczbę 
math.PI pokazuje liczbę PI */
