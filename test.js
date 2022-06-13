/* "" lub '' anulują się jeśli będziemy używali ich
wewątrz siebie np. "I am a "fun" string", wtedy należy użyć
ich naprzemiennie np. "I am a'fun' string", natomiast gdzy jest
ich więcej wtedy przed znakiem dodajemy \ np.
"I\'m a 'fun' string".
*/

var myString = "I\'m a 'fun' string";

console.log(myString);

console.log(myString.length);
// sprawdza ilośc liter w stringu

console.log(myString.toUpperCase());
// zmienia litery na same wielkie

console.log(myString.toLowerCase());
// zmienia litery na same małe

console.log(myString.indexOf("string"));
// szuka od której litery w zdaniu zaczyna się wartość szukana
// wartość -1 wyjdzie gdzy nie znajdzie takiego słowa

//porównanie strings

var string1="abc";
var string2="ABC";

console.log(string1.toLowerCase() === string1.toLowerCase());
//porównanie obydwóch wartości z własciwością z małymi literami