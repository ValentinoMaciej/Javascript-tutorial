for (i = 0; i < 10; i++) {

if(i === 5 || i === 3){

    continue;
}
//nauka do czego służy continue (kontunuacja pętli po spełnieniu warunku)
console.log(i);

if(i === 7){

    break;
}
//nauka do czego służy break (złamanie pętli)
}

console.log("Zrobiłem break z pętli");