/*
metoda innerHTML
Grabbing elementów w JS w DOM czyli np. htmlu
przykładowo

var myBody = document.getElementsByTagName("body");
myBody
wyskoczy element jaki "chwycono"
myBody[0].innerHTML; - od zera w JS liczymy
jak zatwierdzimy to wykoczą wszystkie elementy BODY.

myBody[0].innerHTML = "<p>Jestem paragrafem</p>";

cały BODY został zmieniony na <p> Jestem paragrafem


text-content metodh

var myTitle = document.getElementById("page-title");
myTitle
wyskoczy element z nazwa page-title który chwyciliśmy
myTitle.textContent;
wyskoczy co w nim jest zawarte

myTitle.textContent = "Zmiana tytułu";
nastąpi zmiana zawartości na powyższą wartość