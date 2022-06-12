function getAverage (a,b,c,d,e){

    var average = (a + b + c + d + e) / 2;
    console.log(average);
    return average;


}

var myResult = getAverage(7,12,23,9,3);
console.log("The average is " + myResult)


/* jeśli funkcja zawiera dane (a,b) wtedy funkcja musi być
również wywołana z danymi w nawiasie inaczej będzie błąd,
jeśli są 2 wartości to wywołujemy 2, inaczej sa ignorowane
powyżej tej liczby*/
//return wywołuje funkcję jak w przykładzie
