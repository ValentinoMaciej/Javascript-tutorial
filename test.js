//praktyczne zastosowanie pętli

var links = document.getElementsByTagName("a");

for(i = 0; i < links.length; i++){

links[i].className = "link-" + i;

}
/*
Przypisanie do danego przykładu pętli mówiącej o tym
że następuje numeracja elementu znajsującego się w 
<a> w tym przypadku oznumerowanie linków
*/