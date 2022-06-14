/*
Usuwanie elementu DOM
musimy chwycić element jaki będziemy chcieli "wyczyścic"
a następne nadać metodę usunięcia

var parent = document.getElementById("main-nav").getElementsByTagName("ul")[0];
określiliśmy główny element w którym schodzimy dalej 

var child = parent.getElementByTagName("li")[0];
tutaj zaznaczyliśmy dziecko i chwyciliśmy 1szą pozycję LI

parent.removeChild(child);
usuneliśmy zaznaczoną pozycję

var removed = parent.removeChild(child);
warto zastosować tą metodę aby usunięty element znajdował się 
w "poczekalni" na wypadek gdybyśmy chcieli go uruchomić
tak jak poniżej i wywołać komendą

parent.appendChild(removed);

*/
