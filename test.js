/*
Dodawanie nowego elementu do DOM np. HTML

var newLi = document.createElement("li");
tworzy to
<li></li>

var newA = document.createElement("a");
tworzy to
<a></a>

chcemy je umieścić w konkretnym miejscu, czyli musimy chwycić element i go
zaimplementować w danym miejscu

var menu = document.getElementById("main-nav").getElementsByTagName("ul")[0];
wyskoczy nam menu chwycone przez nas

teraz dodajemy liste do menu
menu.appendChild(newLi);

dodaliśmy do menu nową listę

teraz dodajemy <a> do Li
newLi.appendChild(newA);
appendChild czyli dodajemy nastepny element w postaci newA czyli <a> które mamy opisane wyżej
<a></a>

newA.innerHTML = "Blog";
do danego newA dodany został string w postaci "Blog"

menu.insertBefore(newLi, menu.getElementByTagName("li")[0]);
czyli dodaliśmy element do pierwszego li wyliczonego z kodu w danej cześci kodu


*/
