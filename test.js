// for loop - skrócona wersja while loop - szybszy sposób warunków pętli

var links = document.getElementsByTagName("a");
// dodanie var z elementem do html dla przykładu

for (ja = 1; ja < links.length; ja++){

console.log("To jest link numer" + ja);



}

document.write("wszystkie link są zloopowane");