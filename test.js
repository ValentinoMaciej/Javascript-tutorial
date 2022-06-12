function getAverage (a,b,c,d,e){

    var average = (a + b + c + d + e) / 2; //lokalna funkcja
    console.log(average);
    return average;


}

var myResult = getAverage(7,12,23,9,3); //globalna funkcja


function logResult(){

    console.log("The average is " + myResult + " inside the function");

}

logResult();

//variable scope czyli zakres zmiennych