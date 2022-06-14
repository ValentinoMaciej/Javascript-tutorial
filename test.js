var Car = function(maxSpeed, driver){

this.maxSpeed = maxSpeed;
this.driver = driver;
this.drive = function(speed,time){
    console.log(speed * time);
};
this.logDriver = function(){
    console.log("driver name is " + this.driver);

};


}

var myCar = new Car(70, "Człowiek baton");
var myCar2 = new Car(15, "Człowiek");
var myCar3 = new Car(40, "Baton");
var myCar4 = new Car(34, "Pies baton");

myCar.drive(10,2);
myCar3.logDriver();

/* funkcja construction daje mozliwosc utworzenia
jednej fukncji w ramach której mozemy dodawac
zmienne bez koniecznosci tworzenia kolejnych
takich samych lub podobnych funkcji w nieskonczonsc */
