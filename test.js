/*
zmiana stylu, dodanie wartości do stylu

var title = document.getElementById("page-title");
chwyciło element z "page-title" i wyświetliło

title.setAttrubite("style", "position: relative;");
tutaj nastąpiła wpisanie stylu pozycja relatywna


title.setAttribute("style", "left: 10px");
tutaj nastąpiło zastąpienie wartości position relative


aby dodać wartość nalezy dopisać kolejną wartość np.

title.setAttribute("style", "position: relative; left: 10px");


ale mozna inaczej jak:
title.style.left = "20px";
ustaliło to wartość na 20px w danym stylu

title.style.backgroundColor = "blue";
nastąpiła zmiana koloru tła
w JS nie uzywamy myslnika tylo słowo po słowie
czyli nie background-color
a backgroundColor



/*