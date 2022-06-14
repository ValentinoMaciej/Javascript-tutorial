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

    Jest to samo co u góry ale w innym zapisie

};

console.log(myCar2.maxSpeed);
myCar2.drive(50,3);

*/