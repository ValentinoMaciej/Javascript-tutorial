var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(1545, 11, 2, 10, 30, 45);
var myFutureDate = new Date(2145, 0, 30, 10, 30, 45);

console.log(myPastDate);
console.log(myFutureDate);

var birthday = new Date (1985, 0, 15, 11, 15, 25);
var birthday2 = new Date (1985, 0, 15, 11, 15, 25);

//miesiące (od 0 do 11)
console.log(birthday.getMonth());

// rok
console.log(birthday.getFullYear());

// dzien miesiaca
console.log(birthday.getDate());

// dzien tygodnia
console.log(birthday.getDay());

//godzina daty podanej
console.log(birthday.getHours());

//podaje numery co do milisekundy od 1 stycznia 1970
console.log(birthday.getTime());

if(birthday.getTime() == birthday2.getTime()){

    console.log("urodziny są równe");

} else{

    console.log("urodziny nie są równe");
}
/*
porównanie np. urodzin, z wyznaczeniem w tezie
, że birthday i birthday2 odnoszą się do konkretnej
czynności w tym przypadku czasu
*/