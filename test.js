/*

Kreowanie nowych obiektów


var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";
myCar.drive = function(){
console.log("Teraz prowadzę");};

Okreslanie funkcji obiektu, ale można też w inny sposób

var myCar2 = {

    maxSpeed: 70,
    driver: "Net Ninja",
    drive: function(speed, time){
        console.log(speed * time);

    }
    logDriver: function(){
        console.log("Driver name is " + this.driver);
// THIS wywołuje obiekt pod ktory jest podpięty
THIS na początku kodu oznaczałoby że w logu
pojawią się wszystkie wartości
Natomiast THIS w powyższym przykładzie odwołuje się
do wartości driver z myCar2
    }

    Jest to samo co u góry ale w innym zapisie

};

myCar2.logDriver();
console.log(myCar2.maxSpeed);
myCar2.drive(50,3);

*/